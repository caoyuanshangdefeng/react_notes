#语音质量指标Python（PESQ、STOI、SegSNR、LLR、WSS、CD、LSD、CSIG、CBAK、COVL）王延凯的博客

import pysepm
import os
import numpy as np
import soundfile as sf
from tqdm import tqdm

clean_wavs = 'clean_testset_wav_16k/'#这个路径，大家根据自己的需求进行修改
denoised_wavs = 'cleaned_testset_wav_16k_48700/'#同理进行修改


def file_name(file_dir):
    L = []
    for root, dirs, files in os.walk(file_dir):
        for file in files:
            if os.path.splitext(file)[1] == '.wav':
                L.append(os.path.join(root, file))
    return L


# get wav_lists
clean_lists = file_name(clean_wavs)
denoised_lists = file_name(denoised_wavs)
# Package files
zipped = zip(clean_lists, denoised_lists)

scores = []
CSIGs = []
CBAKs = []
COVLs = []

for (clean_wav, denoised_wav) in tqdm(zipped, 'the progressing ...'):
    # Gain speech parameters
    ref, sr0 = sf.read(clean_wav)
    deg, sr1 = sf.read(denoised_wav)



    '''
    # Method 1: SNRseg (分段信噪比)
        # from pysepm Call SNRseg to calculate its metrics
        # in this case we can choose our frame length =0.03*1000=30 ms , and the overlap =30 ms *0.75 =22.5 ms
        # 得分越高，质量越好
    '''
    # score = pysepm.SNRseg(ref, deg, sr0)



    '''
    # Method 2: llr (对数似然比测度)
        # 
        # 得分越高，质量越好
    '''
    # score = pysepm.llr(ref, deg, sr0)



    '''
    # Method 3: WSS (加权谱倾斜测度)
        # 
        # 得分越低，质量越好
    '''
    score = pysepm.wss(ref, deg, sr0)


    '''
    # Method 4: STOI (可短时客观可懂)
        # 
        # the score from 0-1 . The higher the score, the better the performance.
        #得分范围0~1,得分越高，质量越好
    '''
    # score = pysepm.stoi(ref, deg, sr0)


    '''
    # Method 5: PESQ
        # when I try this commond , I faced some troubles   , so finally I gave up this commond,
        # use the PESQ.py to instead
        得分范围从 -0.5~ 4.5，得分越高，效果越好
    '''
    NaN,score = pysepm.pesq(ref,deg,sr0)



    '''
    # Method 6: CD (Cepstrum Distance)
        # 
        # 数值越高，得分越高.
    '''
    # score = pysepm.cepstrum_distance(ref, deg, sr0)


    '''
       # Method 7: LSD (对数谱距离)
            # This method I use the LSD.py to calculate the distance 
            # 数值越小，得分越高      
    '''


    '''
    Method 1 - 7 use this score to print
    '''
    # score append to scores
    scores.append(score)


    '''
    # Method 8: Composite
        # In this method , It comes some errors, if you want to solve the error ,  see the step 8 in this file.
        # CSIG , CBAK , COVL all from 1 - 5 , The higher the score, the better the performance.
    '''
    # CSIG,CBAK,COVL = pysepm.composite(ref, deg, sr0)
    # CSIGs.append(CSIG)
    # CBAKs.append(CBAK)
    # COVLs.append(COVL)


# print(scores)
print('The average SegSNR evaluation is :   ', sum(scores) / len(scores))
# calculate the standard deviation & variance of the scores
print('The standard deviation is :   ', np.std(scores))
print('The variance is :   ', np.var(scores))


# print(CSIGs,CBAKs,COVLs)
# print('The average CSIG evaluation is :   ', sum(CSIGs) / len(CSIGs))
# print('The average CBAK evaluation is :   ', sum(CBAKs) / len(CBAKs))
# print('The average COVL evaluation is :   ', sum(COVLs) / len(COVLs))

