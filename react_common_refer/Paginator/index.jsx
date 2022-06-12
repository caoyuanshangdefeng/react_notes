import React from 'react'
import './pageCom.css'
// let Component = React.Component;
let Fragment = React.Fragment;

function PageItem(props) {
	return (
		<Fragment>
			{props.isButton ? (
				<button className="item">{props.txt}</button>
			) : (
				<span className="item">{props.txt}</span>
			)}
		</Fragment>
	);
}

function Paginator(props) {
	let handleClick = (e) => {
		let txt = e.target.innerText;
    console.log(txt);
		let { index, toggle } = props;
		if (e.target.nodeName === "BUTTON") {
			if (txt === "上一页") {
				toggle(index - 1);
			} else if (txt === "下一页") {
				toggle(index + 1);
			} else {
				toggle(txt * 1);
			}
		}
	};
	return (
		<div className="page" onClick={handleClick}>
			{props.index > 1 && <PageItem txt="上一页" isButton={true} />}
			<PageItem txt={1} isButton={props.index !== 1} />
			{props.index >= 5 && <PageItem txt="..." isButton={false} />}
			{props.index >= 4 && <PageItem txt={props.index - 2} isButton={true} />}
			{props.index >= 3 && <PageItem txt={props.index - 1} isButton={true} />}
			{props.index !== 1 && props.index !== props.total && (
				<PageItem txt={props.index} isButton={false} />
			)}
			{props.index <= props.total - 2 && (
				<PageItem txt={props.index + 1} isButton={true} />
			)}
			{props.index <= props.total - 3 && (
				<PageItem txt={props.index + 2} isButton={true} />
			)}
			{props.index <= props.total - 4 && <PageItem txt="..." isButton={false} />}
			<PageItem txt={props.total} isButton={props.index !== props.total} />
			{props.index < props.total && <PageItem txt="下一页" isButton={true} />}
		</div>
	);
}
export default Paginator
// const appDom = document.getElementById("app");
// ReactDOM.render(<App />, appDom);
