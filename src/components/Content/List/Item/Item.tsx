// vendor imports
import * as React from "react";
import { css } from "emotion";
// local imports
import randRgb from "../../../../utils/randRgb";
// types
import { Proverb } from "../../../../types";

const item = css`
	text-align: center;
	min-height: 200px;
	width: 200px;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: center;
	padding: 12px;
	line-height: 1.4;
	span {
		font-size: 13px;
		cursor: pointer;
	}
`;

interface ItemProps {
	el: Proverb;
	onNavigation: (id?: number) => void;
}

const Item: React.SFC<ItemProps> = props => {
	return (
		<li
			className={item}
			onClick={() => {
				props.onNavigation(props.el.id);
			}}
			style={{ "background-color": randRgb() }}
		>
			<span>{props.el.text}</span>
		</li>
	);
};

export default Item;