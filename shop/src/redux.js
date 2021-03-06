import { combineReducers, createStore } from 'redux';

//DB의 임시 데이터
let reduxData = [
	{
		id: 0,
		name: '조던 신발',
		quan: 1,
		remain: 2,
		price: 154000,
		imageUrl:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhyiZtZ6lAAas106pmvCAk1WBWjBSsaSwWg&usqp=CAU',
	},
	{
		id: 1,
		name: '나이키 신발',
		quan: 2,
		remain: 3,
		price: 160000,
		imageUrl:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3gpm9aeMg3Uu8LPaLiJ78wvqvTTYl4uwgHOahv9uZI9LCkLItChJvIwu4VBJIIbh-aaCu00&usqp=CAc',
	},
];

const remainReducer = (state = reduxData, action) => {
	if (action.type === '수량증가') {
		let copy = [...state];
		console.log(action.type, 'action.data', action.data);
		if (copy[action.data].quan < copy[action.data].remain) {
			//항목의 주문수량이 재고 수량보다 작을 경우에만
			copy[action.data].quan++;
		} else {
			alert(
				`재고 수량이 부족합니다! 재고수량은 ${
					copy[action.data].remain
				}개 입니다.`
			);
		}
		return copy;
	} else if (action.type === '수량감소') {
		let copy = [...state];
		console.log(action.type, 'action.data', action.data);
		if (copy[action.data].quan - 1 === 0) copy[action.data].quan = 1;
		else copy[action.data].quan--;
		return copy;
	} else if (action.type === '항목추가') {
		let found = state.findIndex((a) => {
			//reduxData의 상품 이름과 payload에 일치하는 아이템의 idx 반환
			return a.name === action.payload.name;
		});
		console.log('중복되는 상품 idx', found);
		//상품이 중복될 때 logic
		if (found >= 0) {
			let copy = [...state];
			copy[found].quan++;
			return copy;
		} else {
			let copy = [...state];
			copy.push(action.payload);
			return copy;
		}
	} else if (action.type === '항목삭제') {
		let copy = [...state];
		console.log(action.type, 'action.data', action.data);
		copy.splice(action.data, 1);
		console.log(copy);
		return copy;
	} else {
		return state;
	}
};
let store = createStore(combineReducers({ remainReducer }));
export default store;
