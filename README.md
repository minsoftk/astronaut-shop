# ๐ Astronaut's Shop

> ๊ธฐ์กด์ ์ผํ๋ชฐ ๊ทธ๋๋ก ๋ง๋ค์ด๋ณด๊ธฐ. ์ค์  ์ผํ๋ชฐ์ฒ๋ผ ๊ตฌํํ๋ ค ๋ธ๋ ฅํ์ต๋๋ค. `๋ฌด์ ์ฌ`, `์ฝ์ค๋กฑ๋ชฐ`, `์ฟ ์๋ฅธ` ๋ฑ ์ฌ๋ฌ ์ผํ๋ชฐ์ ์ฐธ๊ณ .

netlify [Demo ๋ฒ์ ](https://priceless-davinci-7b8ea1.netlify.app/)

 <br/>

# 1. ์ ์ ๊ธฐ๊ฐ & ์ฐธ์ฌ ์ธ์

- 2021.07 ~ ์งํ์ค
- ๊ฐ์ธ ํ๋ก์ ํธ

</br>

# 2. ์ฌ์ฉ ๊ธฐ์ 

## `Front-end`

- React
- Redux
- ant-design, react-bootstrap
- styled-component
- Visual Studio Code

## `Back-end`

- Nodejs (v14.17.4)
  / Express
- MongoDB

  </br>

# 3. ๋ฐ์ดํฐ ํ๋ฆ๋

![](https://github.com/MinsoftK/astronaut-shop/blob/master/flowchart3.png?raw=true)

- APP์์๋ถํฐ ๋ฐ์ดํฐ๋ฅผ Props๋ก ์ ๋ฌ.
- Cart ์ปจํ์ด๋์์  Redux๋ก ์ํ ๊ด๋ฆฌ.
- ํ์ฌ์ ๋ฐ์ดํฐ ํ๋ฆ์ ๊ฒฐ์ ํ๊ฒ ๋ ๋ด์ฉ์ [ํฌ์คํธ](https://minsoftk.tistory.com/66)

<br/>
<br/>

# 4. ์ฃผ์ ๊ธฐ๋ฅ

๊ธฐ์กด์ ์ผํ๋ชฐ์ ์ฐธ๊ณ ํ์ฌ, ์ฌ์ฉ์๋ค์ด ์ฌ์ฉํ๊ธฐ ํธ๋ฆฌํ ๊ธฐ๋ฅ๋ค๊ณผ ๊น๋ํ UI/UX๋ฅผ ์ ๊ณตํ๋ ์๋น์ค๋ฅผ ๊ฐ๋ฐ์ ์ค์ ์ผ๋ก ํ์ต๋๋ค.

<br/>

<details>
<summary>4.1. axios๋ชจ๋๋ก Data๋ฅผ ์ํ ๋ฆฌ์คํธ์ ์ถ๊ฐ</summary>
<div markdown="1">
<br/>

<center><img src="https://github.com/MinsoftK/astronaut-shop/blob/master/shop/src/img/readme1.png?raw=true" width="600" height="400"/></center>

- ํ๋ก์ ํธ๋ฅผ ์ฒ์ ์์ํ  ๋, ๋ฏธ๋ฆฌ Data๋ฅผ JSON ํ์ผ๋ก ๋ง๋ค์ด๋จ๋ค. ํด๋น ๋ฐ์ดํฐ๋ค์ ๋ค๋ฅธ [github Repository](https://github.com/MinsoftK/jsontest/blob/master/test0.json)์ ์ฌ๋ ค๋จ๋ค. ์ฌ์์ํ์ธ์ง ๋จ์์ํ์ธ์ง์ ๋ฐ๋ผ ๋ค๋ฅธ jsonํ์ผ์ axios ๋ชจ๋๋ก ๋ฐ์์จ๋ค. ํด๋น ๋ฐ์ดํฐ๋ฅผ ๊ธฐ์กด์ ๋ฐ์ดํฐ obj์ ์ถ๊ฐํด์ค๋ค.  
  ๐ [ ์ฝ๋ ๋ณด๊ธฐ ](https://github.com/MinsoftK/astronaut-shop/blob/d84390fe076984f8b2f7c370e348df8a4862ec1b/shop/src/container/ShoesList.js#L90)

- ๋ ๋ณด๊ธฐ ๋ฒํผ์ ํด๋ฆญํ์ ๋, ๋ง์ฝ ๋๋ ์ง์ดํ  ์ํ์ด ์๋ค๋ฉด ๋ ๋ณด๊ธฐ ๋ฒํผ์ ๋นํ์ฑํ์ํจ๋ค. ๋จ์, ์ฌ์ ์นดํ๊ณ ๋ฆฌ์ ๋ฒํผ์ state๋ฅผ ๋ฐ๋ก ๊ด๋ฆฌํ๋ค.

  ๐ [ ์ฝ๋ ๋ณด๊ธฐ ](https://github.com/MinsoftK/astronaut-shop/blob/d84390fe076984f8b2f7c370e348df8a4862ec1b/shop/src/container/ShoesList.js#L100)

  <br/>
  <br/>
  </div>
  </details>

<details>
<summary>4.2. ์ํ ํด๋ฆญ์ ์์ธํ์ด์ง๋ก ์ด๋</summary>
<div markdown="2">
<br/>

<center><img src="https://github.com/MinsoftK/astronaut-shop/blob/master/shop/src/img/ezgif.com-gif-maker2.gif?raw=true" width="600" height="400"/></center>

- ํ๋์ ์ํ์ ํด๋ฆญ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ์๋, history ํ์ ์ด์ฉํด `src`๋ก ์ด๋ํ๊ฒ ํ๋ค. ๊ทธ๋ฌ๋ฉด ๊ทธ๋ฆผ๊ณผ ๊ฐ์ด ํด๋น ์ํ์ ์ ๋ณด๋ก ์ด๋ํ  ์ ์๋ค.

```js
(shop/src/component/ShoesItem.js)
(...)
	const onClick = () => {
		console.log('src', { src });
		history.push(src);
	};
	return (
		<div className="col-md-4" onClick={onClick}>
			<img loading="lazy" src={props.shoes.imageUrl} width="100%"></img>
			<h4>{props.shoes.title}</h4>
			<h5>โฉ {itemPrice}</h5>
		</div>
	);
(...)
```

<br/><br/>

  </div>
  </details>

  <details>
<summary> 4.3. Redux๋ฅผ ์ฌ์ฉํ ์ฅ๋ฐ๊ตฌ๋</summary>
<div markdown="3">
<br/>

## ์ฅ๋ฐ๊ตฌ๋

<center><img src="https://github.com/MinsoftK/astronaut-shop/blob/master/shop/src/img/ezgif.com-gif-maker.gif?raw=true" width="600" height="400"/></center>

- ๊ทธ๋ฆผ๊ณผ ๊ฐ์ด ์ํ ์์ธ์ ๋ณด์ฐฝ์์ ์ฅ๋ฐ๊ตฌ๋์ ์ถ๊ฐ ๋ฒํผ์ ํด๋ฆญํ๋ฉด, ์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง์ ์ถ๊ฐ๊ฐ ๋๋ค. ์์ธํ์ด์ง์์ ์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง๋ก Data ์ ๋ฌ์ ์๋นํ ๋ฒ๊ฑฐ๋กญ๋ค. ๊ทธ๋์ Redux ์ํ ๊ด๋ฆฌ ํด์ ์ด์ฉํด ๊ด๋ฆฌํ๋ค. ๐ [redux code๋ณด๊ธฐ](https://github.com/MinsoftK/astronaut-shop/blob/master/shop/src/redux.js)
- ์ฅ๋ฐ๊ตฌ๋ ์ถ๊ฐ ๋ฒํผ์ ๋๋ฅด๋ฉด payload๋ก redux๋ฐ์ดํฐ์ ํด๋น ์ปดํฌ๋ํธ์์ props๋ก ๋ฐ์์จ ๋ฐ์ดํฐ๋ฅผ ๋๊ฒจ์ค๋ค.
- ์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง์ `+`, `-` ๋ฒํผ์ ๋๋ฅผ๋๋ง๋ค redux์ action์ผ๋ก ์ ๋ฌ๋์ด ํด๋น ์์์ ์ํํ๋ค.

๐ [ ์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง ์ฝ๋ ์ ์ฒด ๋ณด๊ธฐ ](https://github.com/MinsoftK/astronaut-shop/blob/master/shop/src/container/Cart.js)

```js
<button
	className="btn btn-danger"
	onClick={() => {
		dispatch({
			type: 'ํญ๋ชฉ์ถ๊ฐ',
			//redux์ ๋ณด๋ด๋ payload
			payload: {
				id: findItem.id,
				sex: props.num,
				name: findItem.title,
				remain: findItem.remain,
				quan: 1,
				imageUrl: findItem.imageUrl,
				price: findItem.price,
			},
		});
		history.push('/cart');
	}}
>
	์ฅ๋ฐ๊ตฌ๋์ ์ถ๊ฐ
</button>
```

<br/><br/>

  </div>
  </details>

  <details>
<summary> 4.4. ์ฅ๋ฐ๊ตฌ๋ ์ํ ์ ํ ๊ธฐ๋ฅ</summary>
<div markdown="4">
<br/>

## ์ํ ์ ํ ๊ฒฐ์  ๊ธฐ๋ฅ

### ๐ [ ์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง ์ ์ฒด ์ฝ๋ ](https://github.com/MinsoftK/astronaut-shop/blob/master/shop/src/container/Cart.js)

<center><img src="https://github.com/MinsoftK/astronaut-shop/blob/master/shop/src/img/readme8.png?raw=true" width="600" height="400"/></center>

- ์ฅ๋ฐ๊ตฌ๋์์ ์ํ์ ์ ํํ๋ฉด ์ด ๊ฒฐ์  ๊ธ์ก์ด ์ค์๊ฐ์ผ๋ก ์๋ฐ์ดํธ ๋๋ค.
- ์ด ๊ธฐ๋ฅ์ ๋ง๋ค๊ธฐ ์ํด useEffect Hook์ ์ด์ฉํด ์ฒ์์ ๋ ๋๋ง ๋  ๋, ๊ธฐ์กด์ redux ๋ฐ์ดํฐ์ ๊ฐ์๋งํผ obj๋ฅผ ๋ง๋ค์ด false๋ฅผ ์๋ ฅํด์คฌ๋ค. ๊ธฐ์กด์ ๋ฒํผ๋ค์ ์ ํ๋์ง ์๋ false ๊ฐ์ default๋ก ๊ฐ์ง๊ฒ ํ๋ค.
- ๋ฒํผ์ด ๋๋ ธ์ ๋ useState๋ฅผ ์ด์ฉํ state ๊ฐ ๋ณ๊ฒฝ์ผ๋ก ์ค์๊ฐ ์๋ฐ์ดํธ๋ฅผ ๊ฐ๋ฅํ๊ฒ ๋ง๋ค์๋ค.
  <br/><br/>

> useEffect Hook

```js
//์ฒ์ ๋ ๋๋ง๋  ๋ useEffect Hook ์ฌ์ฉ
useEffect(() => {
	console.log('ํ์ ์ด์ฉํด redux state ๊ฐ์ ธ์ค๊ธฐ', state);
	console.log('state', state);

	//๋ ๋๋ง๋ ๋ ์ํ์ ๊ฐ์๋งํผ checkbox state๋ฅผ ์ ์ฅํ  obj ์์ฑ
	let copy = [];
	for (let i = 0; i < state.length; i++) copy.push(false);
	setIsSelect(copy);
}, []);
```

<br/>

> ์ํ์ ์ ํํ์ ๋, ์ด ๊ฒฐ์  ๊ธ์ก ํ์

```js
//์ฒดํฌ๋ ์ํ์ ์ด ์ํ๊ธ์ก ์๋ฐ์ดํธ
const onChange = (e) => {
	console.log(e);
	console.log(`checked = ${e.target.checked} , i = ${e.target.checkNumber}`);

	//copy์ checkNumber ์ธ๋ฑ์ค ๊ฐ์ ๋ณ๊ฒฝํด์ค๋ค.
	let copy = [...isselect];
	copy[e.target.checkNumber] = e.target.checked;
	setIsSelect(copy);
};
const onClickBtn = (i) => {
	//์ํ์ ๊ฐ์๊ฐ 1๋ณด๋ค ํฌ๊ณ , ์ํ์ด ์ ํ๋์์ ๋๋ง ๊ฐ๊ฒฉ์ ๋ณ๊ฒฝํด์ค๋ค.
	let pay = [...selectPay];
	pay[i] = state[i].quan * state[i].price;
	console.log(pay);
	setSelectPay(pay);
};
```

<br/><br/>

  </div>
  </details>

<details>
<summary> 4.5. ๋ ๋๋ง ์ฑ๋ฅ ๊ฐ์ </summary>
<div markdown="5">
<br/>

## ๋ ๋๋ง ์ฑ๋ฅ ๊ฐ์ 

### ๐ [lazy loading code๋ณด๊ธฐ](https://github.com/MinsoftK/astronaut-shop/blob/6e469964e4a983b527d0525eae5f622bd2c4e05f/shop/src/App.js#L13)

### ๐ [memo code๋ณด๊ธฐ](https://github.com/MinsoftK/astronaut-shop/blob/6e469964e4a983b527d0525eae5f622bd2c4e05f/shop/src/container/Cart.js#L7)

<br/>

- React Dev Tool์ ์ด์ฉํด ์๊ฐ์ ์ธก์ ํด์ ๋ ๋๋ง ์ต์ ํ์ ํจ๊ณผ๊ฐ ์๋์ง ๋น๊ตํด๋ดค๋ค. ์ ์ผ ๋จผ์  lazy loading์ ์ ์ฉํ์ ๋์ ์๊ฐ์ ๋น๊ตํด๋ดค๋ค. `App.js`์์ ๊ฐ๊ฐ์ `Container` ์ปดํฌ๋ํธ๋ฅผ ๋ก๋ฉํ๊ณ  ์๋๋ฐ lazy loading์ ์ฌ์ฉํ ๋ค, ๋ ๋๋ง ์๊ฐ์ ์ธก์ ํด๋ดค๋ค. ์ ์ฒด ๋ ๋๋ง ์๊ฐ์ ๋ง์ด ์ค์๊ณ , ์ปดํฌ๋ํธ๋ค๋ ์๊ฐ์ด ๋ฏธ์ธํ๊ฒ ์ค์ด๋  ๊ฒ์ ํ์ธํ  ์ ์์๋ค.
  <br/>

> lazy loading ์ ์ฉ ์ 

<center><img src="https://github.com/MinsoftK/astronaut-shop/blob/master/shop/src/img/readme4(lazy-before).png?raw=true" width="600" height="400"/></center>

<br/><br/>

> lazy loading ์ ์ฉ ํ

<center><img src="https://github.com/MinsoftK/astronaut-shop/blob/master/shop/src/img/readme5(lazy-after).png?raw=true" width="600" height="400"/></center>

<br/>
<br/>

- React dev tool์ ์ด์ฉํด ์๊ฐ์ ์ธก์ ํด์ ๋ ๋๋ง ์ต์ ํ์ ํจ๊ณผ๊ฐ ์๋์ง ๋น๊ตํด๋ดค๋ค. lazy loading ์ ์ฉ ์ดํ memo๋ฅผ ์ฌ์ฉํ์ ๋๋ ๋ ๋๋ง ์๊ฐ์ ์ธก์ ํด๋ดค๋ค. memo๋ ์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง์์ ์ฌ์ฉํ๋ค. ๊ทธ ์ด์ ๋ ์๋์ ์กฐ์ ํ ๋, ๋ฆฌ๋ ๋๋ง ๋๋ ๋ถ๋ถ์ด ๋ง์๊ธฐ ๋๋ฌธ์ด๋ค.

<br/>

> memo ์ ์ฉ ์ 

<center><img src="https://github.com/MinsoftK/astronaut-shop/blob/master/shop/src/img/readme7(memo-before).png?raw=true" width="600" height="400"/></center>

<br/><br/>

> memo ์ ์ฉ ํ

<center><img src="https://github.com/MinsoftK/astronaut-shop/blob/master/shop/src/img/readme6(memo-after).png?raw=true" width="600" height="400"/></center>

<br/>

- memo๋ฅผ ์ฌ์ฉํ์ ๋, ํฐ ์ฐจ์ด๊ฐ ์์ด ๋ ๋๋ง ๋๋ ๊ฒฝ์ฐ๋ ์์๋ค. ํ๊ท ์ ์ผ๋ก ์ ์ฒด ๋ ๋๋ง ์๊ฐ์ ๊ฐ์ํ๋ค. ๋ค๋ง lazy loading์ฒ๋ผ ํฐ ์๋ ํฅ์์ ๋ณผ ์ ์์๋ค.
- ๊ตฌ๊ธ ํฌ๋กฌ ๋ถ๋ผ์ฐ์ ์์๋ native lazy loading์ ์ง์ํ๋ค. ํด๋น ๋ฐฉ์์ด ์ง์๋๋ฉด์, ๊ฐ๋ฐ์๋ ์ด๋ฏธ์ง์ loading ์์ฑ๋ง ์ถ๊ฐํด์ฃผ๋ฉด ๋๋ค. `loading="lazy"` ๋ทฐํฌํธ์์ ์ผ์ ํ ๊ฑฐ๋ฆฌ์ ๋ฟ์ ๋๊น์ง ๋ก๋ฉ์ ์ง์ฐ์ํจ๋ค.

```js
<div className="col-md-4" onClick={onClick}>
	<img
		loading="lazy"
		src={props.shoes.imageUrl}
		width="100%"
		alt="..."
		style={{ height: '208px', width: '208px' }}
	></img>
	<h4>{props.shoes.title}</h4>
	<h5>โฉ {itemPrice}</h5>
</div>
```

[image lazy loading](https://helloinyong.tistory.com/297#title-2)
<br/>

  </div>
  </details>
<br/>

# 5. ์ฃผ์ ํธ๋ฌ๋ธ์ํ

<details>
  <summary> 5.1. github์์ JSON ๋ฐ์ดํฐ ๋ฐ์์ฌ ๋ CORS ์ค๋ฅ</summary>
  <div markdown="1">

<br/>

## github์์ JSON ๋ฐ์ดํฐ ๋ฐ์์ฌ ๋ CORS ์ค๋ฅ

- ์๋ฒ๊ฐ ์์ด์ ๋ก์ปฌํ๊ฒฝ์ ์ด์ฉํด axios ๋ชจ๋์ ํตํด์ github์ ์ฌ๋ ค์ง JSON ํ์ผ์ ๋ฐ์์ค๋ ค ํ๋ค. ํ์ง๋ง `Access to XMLHttpRequest at 'https://github.com/MinsoftK/react/blob/main/shop/src/Data/addManShoes.json' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.` ์ค๋ฅ๊ฐ ๋ฐ์ํ๋ค.

#### [์์ธ ๋์ถ]

- ์์ธ์ github์์ JSON ํ์ผ์ ์ ๋๋ก ์ ๋ง๋ค์ด์์๋ค. ๋ค๋ฅธ github์์์ json์ ์ ์์ ์ผ๋ก ๋ถ๋ฌ์ค๋ ๊ฒ์ ํ์ธํ  ์ ์์๊ธฐ ๋๋ฌธ์ด๋ค. ๊ทธ ์ฐจ์ด๋ ์ฌ์ดํธ๊ฐ ๋ฐฐํฌ ์ฌ๋ถ์ด๋ค.
- ๋ค์ ์๊ฐํด๋ณด๋ฉด ๋ฐฐํฌ๋์ง ์์ ์ฌ์ดํธ์์ JSON ํ์ผ์ ํธ์ถํ์ผ๋, CORS ์ค๋ฅ๊ฐ ๋จ๋ ๊ฒ์ ๋น์ฐํ๋ค. ๋ฐฐํฌ ์ดํ์ CORS ์ค๋ฅ๊ฐ ๋จ์ง ์์๋ค. `localhost:3000`์์ ํธ์ถ์ ํด์ ๊ทธ๋ฐ๊ฑด์ง ํน์ github์์ ๋ฐฐํฌ์ CORS ์ค์ ์ด ๋์ด ์๋ ๊ฒ์ธ์ง๋ ํ์ธํด๋ด์ผ ํ๋ค.(์๋ฒ์ ์ฐ๋์ ํ์ธ)

#### [ํด๊ฒฐ ๋ฐฉ์ ํ์]

- ์ ๋ณด๊ฐ ๋ง์ด ์์ด์ ์ฐพ๊ธฐ ํ๋ค์์ง๋ง stackoverflow์์ [๋จ์](https://stackoverflow.com/questions/29612800/load-json-from-github-file)๋ฅผ ์ป์ ์ ์์๋ค. ๊ฒฐ๊ตญ github์์ JSON์ ๋ถ๋ฌ์ค๋ ค๋ฉด ํด๋น repository๊ฐ ๋ฐฐํฌ๋์ด ์์ด์ผ ํ๋ค๋ ๊ฒ์ ์์๋ค. ๊ทธ๋์ JSON์ ๋ฐฐํฌํ  ์ ์๋ [Repository](https://github.com/MinsoftK/jsontest)๋ฅผ ๋ฐ๋ก ๋ง๋ค์ด์ค์ ํด๊ฒฐํ  ์ ์์๋ค.

<br/>

<br/>

๐ [ ์๋ณธ ๋ณด๊ธฐ ](https://github.com/MinsoftK/astronaut-shop/blob/ba961917c6cc688e3da929653dd851c6ff4df634/shop/src/container/ShoesList.js#L91)

<br/>

> ๋ณ๊ฒฝ๋ ์ฝ๋

- ์์ ๊ฐ์ด ๋ฐฐํฌ๋ url๋ก axios๋ชจ๋๋ก ๋ฐ์ดํฐ๋ฅผ ๋ถ๋ฌ์์ ๋ CORS ์ค๋ฅ์์ด ์ ์์ ์ผ๋ก ๋์ํ๋ ๊ฒ์ ํ์ธํ  ์ ์์๋ค.

```js
const fetchData = (i) => {
	axios
		.get('https://minsoftk.github.io/jsontest/test' + i + '.json')
		.then((result) => {
			result.data.map((item) => {
				let newObj = [...wshoes, ...result.data];
				setShoes(newObj);
			});
		})
		.catch(() => {
			console.log('์คํจ');
		});
};
```

<br/>

[์ฐธ๊ณ 1](https://blog.naver.com/PostView.naver?blogId=dnvld1&logNo=222039760747&redirect=Dlog&widgetTypeCall=true&directAccess=false)

[์ฐธ๊ณ 2](https://tried.tistory.com/m/76)

[์ฐธ๊ณ 3](https://evan-moon.github.io/2020/05/21/about-cors/)

<br/><br/>

</div>
</details>

<details>
  <summary> 5.2. ์ํ ๋๋ณด๊ธฐ ๋ฒํผ ํด๋ฆญ์, ๋ฌดํ ์ํ ๋ก๋ฉ ๋ฌธ์ </summary>
  <div markdown="2">

<br/>

## ๋๋ณด๊ธฐ ๋ฒํผ ํด๋ฆญ์, ๋ฌดํ ์ํ ๋ก๋ฉ

- ๋ ๋ณด๊ธฐ ๋ฒํผ์ ๋๋ ์ ๋, 5.1์์์ฒ๋ผ axios๋ชจ๋์ ์ด์ฉํ์ฌ JSON ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์จ๋ค. ์ด๋ ์ํ์ ๋ถ๋ฌ์๋ ๋ ๋ณด๊ธฐ ๋ฒํผ์ด ๋นํ์ฑํ๋์ง ์์ JSON ๋ฐ์ดํฐ๊ฐ ๋ฌดํ์ผ๋ก ์ํ์ด ์ถ๊ฐ๋๋ ์ค๋ฅ๊ฐ ์์๋ค.

#### [์์ธ ๋์ถ]

- ๋จ์ ์ํ์ ๋ฐ์ดํฐ๊ฐ ์ถ๊ฐ๋์ ๋, ๋ชจ๋  ์ํ์ด ์ถ๋ ฅ ๋๋์ง ํ์ธํ๋ ๋ก์ง์ ๋ถ์ฌ.

#### [ํด๊ฒฐ ๋ฐฉ์ ํ์]

- ์ํ์ ๋ถ๋ฌ์ฌ ๋, JSON ๋ฐ์ดํฐ์ ๊ฐ์๋ณด๋ค ๋ง์ด ์ถ๋ ฅ์ด ๋๋ค๋ฉด `๋๋ณด๊ธฐ ๋ฒํผ` ๋นํ์ฑํ ํ๋ค.

#### [ํด๊ฒฐ๋ฐฉ์ ์ ์ฉ]

- ์ฒ์ ๋ ๋๋ง ๋๋ ๋ฐ์ดํฐ์ ๊ฐ์์ ์ถ๊ฐ๋ ๋ฐ์ดํฐ์ ๊ฐ์๋ฅผ ํฉ์ณค์ ๋, ์ ์ฒด ์ํ์ ๊ฐ์๋ณด๋ค ํฌ๊ฑฐ๋ ๊ฐ๋ค๋ฉด ๋ฒํผ์ ๋นํ์ฑํ ์์ผฐ๋ค.
- ๋จ์, ์ฌ์ ์นดํ๊ณ ๋ฆฌ์์ ๋ ๋ณด๊ธฐ ๋ฒํผ์ด ๊ฐ์ state๋ฅผ ๊ณต์ ํ๊ณ  ์์๋ค. ๊ทธ๋์ ๋จ์, ์ฌ์ ์ํ ๊ฐ๊ฐ์ ๊ฒฐ๊ณผ์ ๋ํ ๋ฒํผ state ๋ณ์๋ฅผ 2๊ฐ ๋ง๋ค์ด์คฌ๋ค.

<br/>

<details>
<summary> ๐๊ธฐ์กด์ ์ฝ๋ ํผ์น๊ธฐ</summary>
<br/>

```js
const fetchData = (i) => {
	//๋ฐ์ดํฐ ๋ฐ์์ค๊ธฐ
	axios
		.get('https://minsoftk.github.io/jsontest/test' + i + '.json')
		.then((result) => {
			result.data.map((item) => {
				let newObj = [...wshoes, ...result.data];
				setShoes(newObj);
			});
		})
		.catch(() => {
			console.log('์คํจ');
		});
};
```

</details>

<br/>

<details>
<summary> ๐๋ณ๊ฒฝ๋ ์ฝ๋ ํผ์น๊ธฐ</summary>

<br/>

<br/>

> ๋ณ๊ฒฝ๋ ์ฝ๋

- ๋ง์ฝ ๊ธฐ์กด์ ๋ฐ์ดํฐ์ ๋ถ๋ฌ์จ ๋ฐ์ดํฐ๋ฅผ ํฉํ `newObj`์ ๊ธธ์ด๊ฐ ์ฌ์์ํ์ ๊ฐ์๋ณด๋ค ํฌ๊ฑฐ๋ ๊ฐ๋ค๋ฉด ๋ฒํผ์ ๋นํ์ฑํ ์ํจ๋ค. ๐ [ ์ฝ๋ ๋ณด๊ธฐ ](https://github.com/MinsoftK/astronaut-shop/blob/f8f2b700e9fe171cacf5ad44edbb1ba525bda118/shop/src/container/ShoesList.js#L100)

```js
const fetchData = (i) => {
i
	? axios // i === 1์ผ๋ ์ฌ์ ์นดํ๊ณ ๋ฆฌ ๋๋ณด๊ธฐ ๋ฒํผ ํด๋ฆญ์
			.get('https://minsoftk.github.io/jsontest/test' + i + '.json')
			.then((result) => {
				let newObj = [...wshoes, ...result.data]; //๋ฐ์ดํฐ ํฉ์น๊ธฐ
				setWShoesNum(Data.length + result.data.length); //์๋ Data์ ์ถ๊ฐ๋ ๋ฐ์ดํฐ์ ๊ธธ์ด
				if (newObj.length >= wshoesNum) setWBtnDisable('true'); //ํฉ์น ๋ฐ์ดํฐ์ ๊ธธ์ด๊ฐ ๋ ํฌ๋ค๋ฉด ์ฌ์ ์นดํ๊ณ ๋ฆฌ ๋ฒํผ ๋นํ์ฑํ
				setWShoes(newObj);
				console.log(btndisable);
			})
			.catch(() => {
				console.log('์คํจ');
			})
(...)

```

<br/>

</details>

<br/><br/>

</div>
</details>

<details>
  <summary> 5.3. ์ฌ์ ์ํ ํ์ด์ง์ ๋จ์ ์ํ์ด ๋ฐ์ธ๋ฉ๋๋ ๋ฌธ์ </summary>
  <div markdown="4">

<br/>

## ๋ค๋ฅธ ์ํ์ด ๋ฐ์ธ๋ฉ๋๋ ๋ฌธ์  & ์ผํญ์ฐ์ฐ์ ์ฌ์ฉ์ ๋ ๋๋ง ์ค๋ฅ

- ๋ค๋ฅธ ์ํ์ด ๋ฐ์ธ๋ฉ ๋๋ ๊ฒฝ์ฐ๋ ๋จ์, ์ฌ์ ์ํ์ ์ ์ฅํ๋ state ๋ณ์๋ฅผ ํ์ฉํด์ ํด๊ฒฐํ๋ค. ํ์ง๋ง App์์ ShoesList์ ๋จ์๋ฉด num:0 , ์ฌ์๋ฉด num:1์ props๋ก ๋๊ฒจ์ค๋ค. ์ฒ์์๋ `props.num` ๊ฐ์ ๋ฐ๋ผ์ state ๋ณ์๋ฅผ ์๋ฐ์ดํธํด ๋ ๋๋ง ํ  ์ ์์ ๊ฑฐ๋ผ ์๊ฐํ์ง๋ง `Too many re-renders. React limits the number of renders to prevent an infinite loop.` ์ค๋ฅ๊ฐ ๋ฐ์ํ๋ค.

#### [์์ธ ๋์ถ]

- ๋ ๋๋ง ๋๋ ๊ณผ์ ์์ ์ผํญ์ฐ์ฐ์์ ํ๋์ ํ๊ทธ๊ฐ ๋ค์ด๊ฐ์ ๋๋ ๋ฌธ์ ๊ฐ ์์๋ค. ํ์ง๋ง ์ฌ๋ฌ๊ฐ์ ํ๊ทธ๋ฅผ ํฌํจํ๋ ์๊ฐ ๋ฌดํ ๋ฃจํ ์ค๋ฅ๊ฐ ๋ฐ์ํ๋ค. map์ ์จ์ผ ๋  ๋ ๋จ์ผ ์ปดํฌ๋ํธ๊ฐ ์๋๋ฉด ์๋์ด ๋์ง ์๋๊ฒ ๊ฐ๋ค. JSX ๋ฌธ๋ฒ์ ๋ง์ถฐ ์์ฑํด๋ ์ผํญ ์ฐ์ฐ์ ์์์ ์ฌ๋ฌ ๊ฐ์ ํ๊ทธ๋ฅผ ๊ฐ์ธ๊ณ  ์๋ค๋ฉด, ์๋ฐ์คํฌ๋ฆฝํธ ์์ง์์ parsing ์๋ฌ๊ฐ ์ผ์ด๋๋ ๊ฒ ๊ฐ๋ค.

#### [ํด๊ฒฐ ๋ฐฉ์ ํ์]

- ์ด๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด์ ๊ฐ๊ฐ์ UI ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค์ด์ ๋ถ๋ฌ์๋ค. `props.num`์ด 1์ด๋ฉด ์ปดํฌ๋ํธ๋ฅผ ๋ฐํํ๊ณ , 0์ด๋ฉด ์ปดํฌ๋ํธ๋ฅผ ๋ฐํํ๋ค.

#### [ํจ๊ณผ]

- ์ผํญ์ฐ์ฐ์๋ฅผ ์ด์ฉํด ๊ฐ๋์ฑ์ด ๋์ฑ ๊น๋ํด์ก๊ณ , ์ปดํฌ๋ํธ๋ก UI๋ฅผ ๋ง๋ค์ด์ ์ฌ์ฌ์ฉํ๊ธฐ ์ฌ์์ก๋ค.

<br/>

<details>
<summary> ๐๊ธฐ์กด์ ์ฝ๋ ํผ์น๊ธฐ</summary>
<br/>

```js
{
	//Date2 : ์ฌ์ ๋ฐ์ดํฐ , Data : ๋จ์ ๋ฐ์ดํฐ
	//setShoes : state ๋ณ์๋ฅผ ์๋ฐ์ดํธํ๋ Hook
	props.num === 1 ? setShoes(Data2) : setShoes(Data);
}
```

</details>

<br/>

<details>
<summary> ๐๋ณ๊ฒฝ๋ ์ฝ๋ ํผ์น๊ธฐ</summary>

<br/>

๐ [ ์๋ณธ ๋ณด๊ธฐ ](https://github.com/MinsoftK/astronaut-shop/blob/ba961917c6cc688e3da929653dd851c6ff4df634/shop/src/container/ShoesList.js#L35)

<br/>

> ๋ณ๊ฒฝ๋ ์ฝ๋

```js
const Man = () => {
	//ํด๋ฆญํ์ ๋, ํด๋น ์ํ์ about ์ปดํฌ๋ํธ๋ก ๋ณด๋ด์ผ ํ๋ค.
	return (
		<div className="row">
			<Suspense fallback={<Spin indicator={antIcon} />}>
				{props.shoes.map((item, i) => {
					//์ปดํฌ๋ํธ ๋ฐ๋ณต
					return (
						<ShoesItem shoes={item} num={i} sex="manshoes" key={i}></ShoesItem>
					);
				})}
			</Suspense>
		</div>
	);
};
//props.num์ด 1์ด๋ฉด ์ฌ์ ํ๋ฉด ๋ ๋๋ง
const Woman = () => {
	return (
		<div className="row">
			<Suspense fallback={<Spin indicator={antIcon} />}>
				{props.wshoes.map((item, i) => {
					//์ปดํฌ๋ํธ ๋ฐ๋ณต
					return (
						<ShoesItem
							shoes={item}
							num={i}
							key={i}
							sex="womanshoes"></ShoesItem>
					);
				})}
			</Suspense>
		</div>
	);
};

(...)

return (
		<>
			<Navigator></Navigator>
			<div className="container">
				<div className="row">
					{props.num === 1 ? <Woman></Woman> : <Man></Man>}
				</div>
			</div>
		</>
	);
```

<br/>

</details>

<br/>

</div>
</details>

<details>
  <summary>5.4. ์ฅ๋ฐ๊ตฌ๋์ ์ํ์ด ์ค๋ณต์ผ๋ก ์ถ๊ฐ ๋๋ ๋ฌธ์ </summary>
  <div markdown="5">

<br/>

## ์ค๋ณต์ผ๋ก ์ถ๊ฐ๋๋ ๋ฌธ์ 

#### [์์ธ ๋์ถ]

- ๊ฐ์ ์ํ์ ์ถ๊ฐํด๋ ํด๋น ์ํ์ด ์ค๋ณต๋์ ๋, ์ถ๊ฐํ์ง ์๋ ๋ก์ง์ ๋ถ์ฌ

#### [ํด๊ฒฐ ๋ฐฉ์ ํ์]

- ๋ง์ฝ ์ํ์ ์ด๋ฆ์ด ๋๊ฐ๋ค๋ฉด, ํด๋น ์ํ์ ๋ฑ๋กํ์ง ์๊ณ  `์๋`๋ง ์ฆ๊ฐ์์ผ์ฃผ๋ ๋ก์ง ์ถ๊ฐ.

<br/>

<details>
<summary> ๐๊ธฐ์กด์ ์ฝ๋ ํผ์น๊ธฐ</summary>
<br/>

```js
else if (action.type === 'ํญ๋ชฉ์ถ๊ฐ') {
			let copy = [...state];
			copy.push(action.payload);
			return copy;
		}
```

</details>

<br/>

<details>
<summary> ๐๋ณ๊ฒฝ๋ ์ฝ๋ ํผ์น๊ธฐ</summary>

<br/>

๐ [ ์๋ณธ ๋ณด๊ธฐ ](https://github.com/minsoftk/astronaut-shop/blob/862ef55eae9a8bf2b1b3ea3df1fcb86cd1a9becf/shop/src/redux.js#L52)

<br/>

> ๋ณ๊ฒฝ๋ ์ฝ๋

- payload๋ก ๋๊ฒจ์ค ๋ฐ์ดํฐ์ redux ๋ฐ์ดํฐ๋ฅผ ๋น๊ตํด์ ๊ฐ์ ์ํ์ ์ด๋ฆ์ด ์กด์ฌํ๋ค๋ฉด ํด๋น idx๋ฅผ found์ ์ ์ฅํ๋ค. found๊ฐ 0๋ณด๋ค ํฐ ๊ฒฝ์ฐ๋ผ๋ฉด(์กด์ฌํ๋ค๋ฉด) ๊ฐ์๋ฅผ ์ฆ๊ฐ์์ผ์ค๋ค. 0๋ณด๋ค ์์๊ฒฝ์ฐ์๋ ๊ทธ๋๋ก `push`๋ฅผ ์จ์ copy obj์ ์ถ๊ฐํด์ค๋ค.

```js
else if (action.type === 'ํญ๋ชฉ์ถ๊ฐ') {
		let found = state.findIndex((a) => {
			//reduxData์ ์ํ ์ด๋ฆ๊ณผ payload์ ์ผ์นํ๋ ์์ดํ์ idx ๋ฐํ
			return a.name === action.payload.name;
		});
		console.log('์ค๋ณต๋๋ ์ํ idx', found);
		//์ํ์ด ์ค๋ณต๋  ๋ logic
		if (found >= 0) {
			let copy = [...state];
			copy[found].quan++;
			return copy;
		} else {
			let copy = [...state];
			copy.push(action.payload);
			return copy;
		}
```

<br/>

</details>

<br/>

</div>
</details>

<details>
<summary> 5.5. ์ฅ๋ฐ๊ตฌ๋ ์ํ ์ฒดํฌ ํ, ์ด ๊ฒฐ์  ๊ธ์ก ํ์ ์ค๋ฅ</summary>
<div markdown="6">

## ์ฅ๋ฐ๊ตฌ๋ ์ํ ์ฒดํฌ ํ, ์ด ๊ฒฐ์  ๊ธ์ก ํ์ ์ค๋ฅ

<br/>

<center><img src="https://github.com/MinsoftK/astronaut-shop/blob/master/shop/src/img/readme9.png?raw=true" width="800" height="600"/></center>

- ์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง์์ ๊ฒฐ์ ํ  ์ํ๋ค์ ์ ํ์ ํ๋ฉด ์ด ๊ฒฐ์  ๊ธ์ก์ ํ์ํด์ฃผ๋ ๊ธฐ๋ฅ์ด ์์ต๋๋ค. ํ์ง๋ง ๊ธฐ์กด์ ์ฝ๋์์ ์ํ์ ์ ํํ๊ณ  ์๋์ ๋ณ๊ฒฝํ๊ฑฐ๋ ์ฒดํฌ ๋ฐ์ค๋ฅผ ํด์ ํ์ ๋, ์ด ๊ฒฐ์  ๊ธ์ก์ด ๋ณ๊ฒฝ๋์ง ์๋ ์ค๋ฅ๊ฐ ์์์ต๋๋ค.

#### [์์ธ ๋์ถ]

- ์ด ์์ธ์ ์ฐพ๊ธฐ ์ํด ๊ฐ๊ฐ์ ํจ์์์ ์ ๋๋ก ๊ฐ์ ์๋ฐ์ดํธํ๋์ง ํ์ธํด๋ดค์ต๋๋ค. ํ์ธํด๋ณด๋ ์ํ์ ํ์ ๊ด๋ฆฌํ๋ state ๋ณ์์ 'true' ๊ฐ์ ๊ฐ์ง๊ณ  ์์ด์ผ ํ๋๊ฒ 'false' ๊ฐ์ ๊ฐ์ง๊ณ  ์๋ ์ค๋ฅ๊ฐ ์์์ต๋๋ค. ๋ํ ์ฒดํฌ๋ฐ์ค๊ฐ ์ ํ์ด ๋๊ณ  ํ๋ ธ์ ๊ฒฝ์ฐ, Change ์ด๋ฒคํธ ํจ์๋ก ๊ฐ๊ฐ์ ์ด ์ํ ๊ธ์ก์ ๊ธฐ์กด์ ์ด ๊ฒฐ์ ๊ธ์ก์์ ๋ํ๊ฑฐ๋ ๋นผ๋ ๋ฐฉ์์ผ๋ก useState Hook์ ์ด์ฉํด ์ํ๊ด๋ฆฌ ํจ์๋ฅผ ์ด์ฉํด ์ด ๊ฒฐ์  ๊ธ์ก์ ํ์ํ์ต๋๋ค.

#### [ํด๊ฒฐ ๋ฐฉ์ ํ์]

- ํ์ง๋ง ์ด๋ ๊ฒ ์์ฑํ์ ๋ ๋ฌธ์ ์ ์ ์๋์ ๋ณ๊ฒฝํ์ ๋, redux์ store ๋ฐ์ดํฐ๊ฐ ์์ ๋๋๋ฐ ์ด๋ฅผ ํด๋น ์ปดํฌ๋ํธ์ redux ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์์ state ๊ฐ์ผ๋ก ๊ด๋ฆฌํ๋ ค๋ ์ด๋ ๋ถ๋ถ์์ ๋ฌธ์ ๊ฐ ์๊ธฐ๋์ง ์ฐพ๊ธฐ๋ ์ด๋ ค์ ๊ณ , State ๋ฐ์ดํฐ ๊ด๋ฆฌ๋ฅผ ํด๋ฒ๋ฆฌ๋ ๊ต์ฅํ ์ดํดํ๊ธฐ ์ด๋ ค์ ์ต๋๋ค. ๊ทธ๋์ ๊ธฐ์กด์ ๋ฐฉ์์ ๋ณ๊ฒฝํด์ ์ฒ์๋ถํฐ ์ํ์ ์๋์ ์กฐ์ ํ๋ ๋ฒํผ์ ๋๋ ์ ๋, redux์ ์ ์ก๋๋ ๋ฐ์ดํฐ๋ก ์ฒดํฌ๊ฐ ๋ ์ํ๋ง์ ์ฐพ์์ ๊ฐ๊ฒฉ์ ๋ํด ์ด ๊ฒฐ์  ๊ธ์ก์ ํ์ํ์๋ผ๋ ์๊ฐ์ ํ์ต๋๋ค.

#### [ํด๊ฒฐ๋ฐฉ์ ์ ์ฉ]

- ๊ทธ๋ ๊ฒ redux๋ฐ์ดํฐ๊ฐ ์๋ฐ์ดํธ ๋์์ ๋, useEffect Hook์ ์ด์ฉํด, ์ฒดํฌ๋ฐ์ค์ ๋ณ๊ฒฝ์ด ์๊ธธ๋๋ง๋ค redux ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ ๋ ๋๋ง ๋ ๋๋ง๋ค ์ฒดํฌ๊ฐ ๋ ์ํ๋ง์ ๋ชจ๋ ๋ํ๋ ๋ฐฉ์์ผ๋ก ์ด ๊ฒฐ์  ๊ธ์ก์ ํ์ํ  ์ ์์์ต๋๋ค.

#### [ํจ๊ณผ]

- ๊ธฐ์กด์๋ state๋ณ์๋ฅผ ํ์ฉํด ์๋์ด ์ถ๊ฐ๊ฐ ๋๊ฑฐ๋ ๊ฐ์ํ๋ฉด ํด๋น ๊ธ์ก์ ๋บ๋๋ฐ, ์ด๋ redux ๋ฐ์ดํฐ๋ฅผ ์๋ก์ด state๋ณ์์ ์ ์ฅํด ๊ทธ ๋ณ์๋ฅผ ๋ ๊ฐ๊ณตํด๋ฒ๋ฆฌ๊ธฐ ๋๋ฌธ์ ๊ต์ฅํ ๋ณต์กํ๊ณ  ํจ์จ์ ์ด์ง ์์์ต๋๋ค. ๋ฐ๋ฉด์ ํด๊ฒฐ๋ฐฉ์์ ์ ์ฉํ์ ๋๋ ์๋์กฐ์  ๋ฒํผ์ ๋๋ ์ ๋, reducer๋ก action์ ์ ๋ฌํฉ๋๋ค. ๊ทธ๋ผ ๋ณ๊ฒฝ๋ State๋ฅผ redux์์ ๊ฐ์ ธ์ต๋๋ค. ๋์ฑ ์์ฐ์ค๋ฌ์ด ํ๋ฆ์ ๊ฐ์ง ๋ก์ง์ผ๋ก ๋ง๋ค ์ ์์์ต๋๋ค.

<br/>

<details>
<summary> ๐๊ธฐ์กด์ ์ฝ๋ ํผ์น๊ธฐ</summary>
<br/>

- ํด๋น ์ํ์ด ์ ํ๋์๋ค๋ฉด, ์ํ์ `์๋ * ๊ฐ๊ฒฉ`์ `์ด ๊ฒฐ์ ๊ธ์ก`์ ๋ํด์ค๋ค.
- ์๋ ํจ์๋ ์ํ์ ์๋์ ์กฐ์ ํ์ ๋, ๋ฐ์ํ๋ ์ด๋ฒคํธ ํจ์

```js
const onChange = (e) => {
	console.log(e);
	console.log(`checked = ${e.target.checked} , i = ${e.target.checkNumber}`);
	console.log(selectPay + e.target.item.price * e.target.item.quan);
	let copy = [...isselect];

	//copy์ checkNumber ์ธ๋ฑ์ค ๊ฐ์ ๋ณ๊ฒฝํด์ค๋ค.
	copy[e.target.checkNumber] = e.target.checked;
	setIsSelect(copy);
	if (e.target.checked === true) {
		//์ฒดํฌ๋ฐ์ค๊ฐ ์ฒดํฌ๋์์๋ ํด๋น ์ํ ์ด ๊ธ์ก์ ๋ํด์ค๋ค.
		setSelectPay(selectPay + e.target.item.price * e.target.item.quan);
	} else if (e.target.checked === false) {
		//์ฒดํฌ๋ฐ์ค๊ฐ ์ฒดํฌ๋์์๋ ํด๋น ์ํ ์ด ๊ธ์ก์ ๋นผ์ค๋ค.
		setSelectPay(selectPay - e.target.item.price * e.target.item.quan);
	} else {
		alert('์๋ชป๋ ์ ํ์๋๋ค.');
	}
};
```

</details>

<br/>

<details>
<summary> ๐๋ณ๊ฒฝ๋ ์ฝ๋ ํผ์น๊ธฐ</summary>

<br/><br/>

๐ [ ์๋ณธ ๋ณด๊ธฐ ](https://github.com/MinsoftK/astronaut-shop/blob/6f5a851647893dec98c3a2cd70353b3dcd5be541/shop/src/container/Cart.js#L19)

<br/>

> ๋ณ๊ฒฝ๋ ์ฝ๋

- ์ฝ๋๋ฅผ ์ ๋ฆฌํ์๋ฉด, `useEffect`๋ฅผ ์ด์ฉํด ์ฒ์ ๋ ๋๋ง ๋ ๋ ์ํ์ ๊ฐ์์ ๊ฐ๊ฒฉ์ ์ ์ฅํ๋ state ๋ณ์๋ฅผ ์ ์ธํ๋ค.
- ์ํ์ ์๋๊ณผ ์ฒดํฌ๋ฐ์ค์ ๋ณ๊ฒฝ์ด ์ผ์ด๋๋ฉด, ์ฒดํฌ๋ฐ์ค๊ฐ `true`์ธ ์ํ์ ์๋ก์ด ์ด ๊ฒฐ์ ๊ธ์ก์ ๋ค์ ์๋ฐ์ดํธํ๋ค. (2๋ฒ์งธ useEffect ์ฝ๋๋ถ๋ถ)
- ์ฒดํฌ๋์์ ๋, ์ฒดํฌ๋ฐ์ค์ ์ํ๋ฅผ ์๋ฐ์ดํธ ํด์ค๋ค.
- ์๋ `+`, `-` ๋ฒํผ์ ํด๋ฆญํ์ ๋, ์๋ก์ด ์ํ ๊ธ์ก์ state ๋ณ์์ ์๋ฐ์ดํธ ํด์ค๋ค.
- ํญ๋ชฉ์ญ์ ๋ฅผ ํ์๋, ์ํ์ ๋ฆฌ์คํธ์์๋ ์ญ์ ๋ฅผ ํด์ค๋ค.

```js
//(shop / src / container/Cart.js)
//์ฒ์ ๋ ๋๋ง๋  ๋
useEffect(() => {
	console.log('ํ์ ์ด์ฉํด redux state ๊ฐ์ ธ์ค๊ธฐ', reduxstate);
	console.log('state', reduxstate);

	//๋ ๋๋ง๋ ๋ ์ํ์ ๊ฐ์๋งํผ checkbox state๋ฅผ ์ ์ฅํ  obj ์์ฑ
	let copybox = [];
	let copypay = [];
	for (let i = 0; i < reduxstate.length; i++) {
		copybox.push(false); //์ ํ ๋ฐ์ค false ์ด๊ธฐํ
		copypay.push(reduxstate[i].price * reduxstate[i].quan); // ์ํ ๊ฐ๊ฐ์ ๊ฒฐ์ ๊ฐ๊ฒฉ ์ด๊ธฐํ
	}
	setIsSelect(copybox);
	setSelectPay(copypay);
}, []);
//์ ํ๋ ์ํ์ด๋ ๊ฐ๊ฒฉ์ด ๋ณํ  ๋, ์ฌ๋ ๋๋ง
useEffect(() => {
	console.log('์ ํ๋ฐ์ค ๋ณํ', isselect);
	let total = 0;
	for (let i = 0; i < state.length; i++) {
		if (isselect[i] === true) {
			total += selectPay[i];
		}
	}
	setTotalPay(total);
}, [isselect, selectPay, totalPay]);

//์ฒดํฌ๋ ์ํ์ ์ด ์ํ๊ธ์ก ์๋ฐ์ดํธ
const onChange = (e) => {
	console.log(e);
	console.log(`checked = ${e.target.checked} , i = ${e.target.checkNumber}`);

	//copy์ checkNumber ์ธ๋ฑ์ค ๊ฐ์ ๋ณ๊ฒฝํด์ค๋ค.
	let copy = [...isselect];
	copy[e.target.checkNumber] = e.target.checked;
	setIsSelect(copy);
};
const onClickBtn = (i) => {
	//์ํ์ ๊ฐ์๊ฐ 1๋ณด๋ค ํฌ๊ณ , ์ํ์ด ์ ํ๋์์ ๋๋ง ๊ฐ๊ฒฉ์ ๋ณ๊ฒฝํด์ค๋ค.
	let pay = [...selectPay];
	pay[i] = state[i].quan * state[i].price;
	console.log(pay);
	setSelectPay(pay);
};
```

<br/>

</details>

<br/><br/>

</div>
     </details>

<details>
<summary> 5.6. ๋๋ณด๊ธฐ ๋ฒํผ ๋นํ์ฑํ ํ, ์์ธํ์ด์ง์์ ๋ค๋ก๊ฐ๊ธฐ ๋๋ ์ ๋ ๋ฒํผ์ด ํ์ฑํ ๋๋ ๋ฌธ์ </summary>
<div markdown="6">

## ๋ค๋ก๊ฐ๊ธฐ ํด๋ฆญ ์, ๋ฒํผ์ด ํ์ฑํ ๋๋ ๋ฌธ์ 

<br/>

- ์ํ ๋ฆฌ์คํธ์์ ๋๋ณด๊ธฐ ๋ฒํผ์ ๋๋ฌ์ ์ํ์ ์ถ๊ฐํ ๋ค, ์์ธํ์ด์ง๋ก ๋ค์ด๊ฐ ๋ค๋ก๊ฐ๊ธฐ๋ฅผ ๋๋ ์ ๋, ๋ค์ ๋๋ณด๊ธฐ ๋ฒํผ์ด ํ์ฑํ ๋๋ ๋ฌธ์ ๊ฐ ๋ฐ์ํ๋ค.

#### [์์ธ ๋์ถ]

- ์์ธํ์ด์ง์์ ๋ค๋ก๊ฐ๊ธฐ๋ฅผ ๋๋ ์ ๋, ์ํ๋ฆฌ์คํธ ์ปดํฌ๋ํธ์์ ์ด๊ธฐ State ๊ฐ์ผ๋ก ์ค์ ๋๊ณ  ์์๋ค.

#### [ํด๊ฒฐ ๋ฐฉ์ ํ์]

- ์ด๋ฅผ ํด๊ฒฐํ๋ ค๋ฉด '๋ค๋ก ๊ฐ๊ธฐ' ๋ฒํผ์ ๋๋ฌ์ ๋ค์ ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง์ด ๋์ด๋, state ๊ฐ์ ์ํ๋ค์ ๋ฆฌ์คํธ๊ฐ ์ ์ฒด ๋ฆฌ์คํธ์ ๊ธธ์ด์ธ์ง๋ฅผ ์ ์ฅํ๊ณ  ์์ด์ผ ํ๋ค. ํ์ง๋ง ๋ ๋๋ง์ด ๋  ๋, ๋ฒํผ์ ํ์ฑํ๋ฅผ ๊ฒฐ์ ํ๋ ค๋ฉด useEffect๋ฅผ ์ฌ์ฉํด์ผ ํ๋ค. ํ์ง๋ง Axios๋ฅผ ์ฌ์ฉํ์ ๋ ์ถ๊ฐ๋ ์ํ๊ณผ ์ ์ฒด ๊ธธ์ด๋ฅผ ๋น๊ตํด์ ๋ฒํผ์ ํ์ฑํ ์ฌ๋ถ๋ฅผ ๊ฒฐ์ ํ๋๋ฐ, ์ด๋ฅผ useEffect์ ์ ๋ถ ์์ฑํด์ผ ํ๋ค๋ ๊ฒ์ด ๋๋ฌด ๋นํจ์จ์ ์ด๋ผ๋ ์๊ฐ์ด ๋ค์๋ค. ๊ทธ๋์ ์ฌ๋ฌ ๋ฐฉ๋ฒ์ ๊ณ ๋ฏผํด๋ณด๊ณ  ๊ตฌ๊ธ๋ง์ ํด๋ณด์๋ค.  
  ~~๊ทธ ๊ฒฐ๊ณผ Session Storage๋ฅผ ์ด์ฉํ๋ ๋ฐฉ๋ฒ์ ์ ์ํ๊ณ  ์์๋ค. Redux ์ ์ฌ์ฉํ๋ ๊ฒ๋ ๋ฐฉ๋ฒ์ด์์ง๋ง, ๊ฐ์ธ์ ์ผ๋ก ์ฝ๋์ ๊ธธ์ด ์ธก๋ฉด์์๋ ์น ๋ธ๋ผ์ฐ์ ์ storage๋ฅผ ์ด์ฉํ๊ธฐ ๋๋ฌธ์ ๋ฉ๋ชจ๋ฆฌ ์ธก๋ฉด์์๋ Session Storage๋ฅผ ์ด์ฉํ๋ ๊ฒ์ด ๋ ํจ์จ์ ์ด๋ผ๊ณ  ์๊ฐํ๋ค.~~

* ~~[reference1](https://lion-king.tistory.com/18), [reference2](https://www.phpschool.com/gnuboard4/bbs/board.php?bo_table=qna_html&wr_id=300154&sca=&sfl=wr_subject%7C%7Cwr_content&stx=history&sop=and) ๋ชจ๋ Session Storage๋ฅผ ์ด์ฉํ๋ ๋ฐฉ๋ฒ์ ์ ์ํ๊ณ  ์์๋ค.~~

##### ๋ฐฉ๋ฒ ์์ 

- session storage๋ง์ ํ์ฉํ์ ๋, `๋๋ณด๊ธฐ` ๋ฒํผ์ ์ปจํธ๋กคํ๋ ๊ฒ์ด ๊ต์ฅํ ์ด๋ ค์ ๋ค. ์๋ํ๋ฉด ์๋ก๊ณ ์นจ์ ๋๋ ์ ๋, ์ง์ด๋ ์ํ์ ๋ ๋๋ง์ด ์ด๊ธฐํ ๋์ง๋ง session storage์ ๊ฐ์ ๊ทธ๋๋ก๋ผ ์ด๊ธฐ ์ํ์์๋ ๋ฒํผ์ด ๋นํ์ฑํ๊ฐ ๋๋ ์น๋ช์ ์ธ ์ค๋ฅ๊ฐ ์์๋ค. ๊ทธ๋์ ์กฐ๊ธ ๋ ํจ์จ์ ์ธ ๋ฐฉ๋ฒ์ ์๊ฐํ๋๋ฐ, map์ ์จ์ ์ํ์ ๋ ๋๋งํ๋ ์ปดํฌ๋ํธ์์ `๋ ๋๋ง ๋ ์ด ์ํ์ ๊ฐ์`๋ฅผ ์ ์ ์์๋ค. ๊ทธ๋ฆฌ๊ณ  ๊ธฐ์กด์ axios ํธ์ถํ๋ ๋ถ์์, ์ถ๊ฐ๋ ๋ฐ์ดํฐ์ `์ด ๊ธธ์ด`๋ฅผ ์ฌํ์ฉํด state์ ์ ์ฅํ  ์ ์์๋ค. ์ด๋ฅผ ํ์ฉํด์ ๋์ฑ ์ฝ๊ฒ ์ฝ๋๋ฅผ ์งค ์ ์์ ๊ฒ ๊ฐ์๋ค.

#### [ํด๊ฒฐ๋ฐฉ์ ์ ์ฉ]

- ๋๋ณด๊ธฐ ๋ฒํผ ํด๋ฆญ์, ์ํ์ด ์ถ๊ฐ๋๊ณ  ์ถ๊ฐ๋ `์ด ๊ธธ์ด`๋ฅผ session storage์ ์ ์ฅํ๋ค. ์ดํ ์์ธํ์ด์ง์์ ๋ค๋ก๊ฐ๊ธฐ๋ฅผ ๋๋ ์ ๋, **session storage์ ์ํ๋ค์ ์ด ๊ธธ์ด๊ฐ ์ ์ฅ๋์ด์๋์ง ํ์ธํ๋ค.** ๋ง์ฝ session storage์์ ๊ฐ์ ธ์จ ์ ๋ณด๊ฐ null์ด๋ผ๋ฉด, useState์ ๊ธฐ๋ณธ๊ฐ์ธ 'false'๊ฐ ๋ค์ด๊ฐ์ ๋ฒํผ์ด ํ์ฑํ๊ฐ ๋๋ค. **ํ์ง๋ง session storage ๊ฐ์ด ์กด์ฌํ๊ณ , ๋ถ๋ฌ์จ ๋ฐ์ดํฐ์ ๊ฐ์ด ๋ ๋๋ง๋ ์ํ์ ๊ฐ์๋ณด๋ค ํฌ๊ฑฐ๋ ๊ฐ๋ค๋ฉด ๋ฒํผ์ ๋นํ์ฑํ ์ํจ๋ค.**  
  ์ด๋ฅผ ํตํด ๊ธฐ์กด์ session storage๋ก๋ง ๊ตฌํํด ๋นํจ์จ์ ์ด์๋ ์ฝ๋์ ์ํ ๊ด๋ฆฌ๋ฅผ ๋์ฑ ํจ์จ์ ์ผ๋ก ํ  ์ ์๊ฒ ๋๋ค.

<br/>

<details>
<summary> ๐๊ธฐ์กด์ ์ฝ๋ ํผ์น๊ธฐ</summary>
<br/>

- ๊ธฐ์กด์ ๋ฐฉ์์ผ๋ก๋ useEffect์ return์ ํ์ฉํด session storage์ ์ ์ฅํ๊ณ  ๋ถ๋ฌ์ค๋ ๋ก์ง์ ๋๋ ์ ๋ฒํผ์ ๋นํ์ฑํ ์ํ๋ฅผ ์ปจํธ๋กคํ๋ค. ํ์ง๋ง ๊ต์ฅํ ์น๋ช์ ์ธ ์ค๋ฅ๋ค์ด ๋ฐ์ํ๊ณ (์๋ก๊ณ ์นจ์ ํ์ ๋, session ๋ฐ์ดํฐ๋ก ์ธํ ๋ฒํผ ๋นํ์ฑํ), ๊ต์ฅํ ๋นํจ์จ์ ์ด๋ผ๋ ์๊ฐ์ด ๋ง์ด ๋ค์๋ ์ฝ๋.

```js
(./src/container/ShoesList.js)
//๋ฒํผ์ ๋นํ์ฑํ ์ํ session์คํ ๋ฆฌ์ง์ ์ ์ฅ
useEffect(() => {
	let btnData = window.sessionStorage.getItem('btnstate');
	btnData = JSON.parse(btnData);

	// ๋ง์ฝ btnData๊ฐ null์ด๋ผ๋ฉด session์ ๋จผ์  ์ ์ฅํ๋ค.
	if (!btnData) {
		saveBtnData();
	} else {
		//null์ด ์๋๋ session์ ์ ์ฅ๋์ด ์๋ btn์ ์ํ๋ฅผ ๊ธฐ์กด์ ์ํ์ ์๋ ฅ.
		if (btnData.manbtn === true) setBtnDisable(true);
		if (btnData.womanbtn === true) setWBtnDisable(true);
	}
	//session์ ์ ๋ณด๋ฅผ ์๋ฐ์ดํธ ํ๋ ๊ณผ์ ์ด ๋๋๋ฉด ๋ณ๊ฒฝ๋ btn์ ์ํ๋ค์ ๋ค์ session์ ์ ์ฅํ๋ค.
	return saveBtnData();
	}, [btndisable, wbtndisable]);
```

</details>

<br/>

<details>
<summary> ๐๋ณ๊ฒฝ๋ ์ฝ๋ ํผ์น๊ธฐ</summary>

<br/>

๐ [ ์๋ณธ ๋ณด๊ธฐ ](https://github.com/minsoftk/astronaut-shop/blob/2e73b9871e4a9072ff9b36d21de823b765c79f7c/shop/src/container/ShoesList.js#L33)

<br/>

> ๋ณ๊ฒฝ๋ ์ฝ๋

- ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง ๋  ๋, useState์ ๊ธฐ๋ณธ ์ธํ ๊ฐ์ธ false๋ก ์๋ฐ์ดํธ๊ฐ ๋๋ค. ๊ทธ๋ useEffect๊ฐ ํธ์ถ๋๋ฉฐ, session์ ์ ์ฅ๋ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์จ๋ค. ๋ง์ฝ ๊ฐ์ ธ์จ ๋ฐ์ดํฐ๊ฐ null์ด๋ผ๋ฉด ๊ธฐ๋ณธ ๊ฐ์ธ `false`๋ฅผ ๊ทธ๋๋ก ์ฌ์ฉ. ํ์ง๋ง null์ด ์๋๊ณ , ๊ฐ์ ธ์จ ๋ฐ์ดํฐ๊ฐ ๋ ๋๋ง๋ ์ํ์ ๊ฐ์์ธ `renderMan`, `renderWoMan`์ ๊ฐ๋ณด๋ค ํฌ๊ฑฐ๋ ๊ฐ๋ค๋ฉด ๋ฒํผ์ ๋นํ์ฑํ ์ํจ๋ค.

```js
(./src/container/ShoesList.js)
	//btndisable, wbtndisable ์๋ฐ์ดํธ์
	useEffect(() => {
		//session storage์์ ์ ์ฅ๋ ๋จ์ ์ฌ์ ์ํ์ ์ด๊ธธ์ด๋ฅผ ๊ฐ๊ฐ ๊ฐ์ ธ์จ๋ค.
		let manLength = window.sessionStorage.getItem('totalManShoesLen');
		let womanLength = window.sessionStorage.getItem('totalWoManShoesLen');
		manLength = JSON.parse(manLength);
		womanLength = JSON.parse(womanLength);

		// ๊ฐ์ ธ์จ ๋ฐ์ดํฐ๊ฐ null์ด ์๋๊ณ  ๊ฐ๊ฐ์ ๋ ๋๋ง๋ ์ํ์ ๊ฐ์๋ณด๋ค ํฌ๊ฑฐ๋ ๊ฐ๋ค๋ฉด, ๋ฒํผ์ ๋นํ์ฑํ ์ํจ๋ค.
		if (manLength !== null && manLength.shoesNum >= renderMan)
			setBtnDisable(true);
		if (womanLength !== null && womanLength.wshoesNum >= renderWoMan)
			setWBtnDisable(true);
	}, [btndisable, wbtndisable]);

	//๋จ์ ์ํ ๋๋ณด๊ธฐ ๋ฒํผ ํด๋ฆญ์ axios์์ session storage๋ก ์ ์ฅํ๋ ํจ์.
	const saveshoeslen = (input) => {
		const shoesLength = { shoesNum: input };
		window.sessionStorage.setItem(
			'totalManShoesLen',
			JSON.stringify(shoesLength)
		);
	};
	//์ฌ์ ์ํ ๋๋ณด๊ธฐ ๋ฒํผ ํด๋ฆญ์ axios์์ session storage๋ก ์ ์ฅํ๋ ํจ์.
	const savewshoeslen = (input) => {
		const shoesLength = { wshoesNum: input };
		window.sessionStorage.setItem(
			'totalWoManShoesLen',
			JSON.stringify(shoesLength)
		);
	};
```

<br/>

</details>

</div>
     </details>

<br/><br/>

# 6. ๊ธฐํ ํธ๋ฌ๋ธ์ํ

<details>
  <summary> 6.1. ๋ฐ๋ณต๋ฌธ์ผ๋ก ์ปดํฌ๋ํธ ํธ์ถ์ Warning</summary>
  <div markdown="1">

## `Warning: Each child in a list should have a unique "key" prop.`

๋ฆฌ์กํธ์์๋ DOM ์๋ฆฌ๋จผํธ์ ์ปดํฌ๋ํธ๊ฐ์ ๊ด๊ณ๋ฅผ key props๋ฅผ ํตํด์ ํ๋จํ๋ค. ๊ทธ๋์ idx๋ก key๊ฐ์ด ์๋ ฅ๋๋๊ฑด ๊ถ์ฅ๋์ง ์๋๋ค. `<div key={text}>` ๋ฅผ ๋ฃ์ด์ค์ผ๋ก์จ ์ค๋ฅ๋ฅผ ํด๊ฒฐํ  ์ ์์๋ค. map ๋๋ ๋ฐ๋ชฉ๋ฌธ์ ๋๋ ธ์ ๊ฒฝ์ฐ key๋ฅผ ์๋ ฅ๋ฐ๋ ๊ฒ์ ๊ถ์ฅํ๋ค.
https://sentry.io/answers/unique-key-prop/

</div>
</details>

<details>
  <summary> 6.2. ์ํ์ ๋ฆฌ์คํธ ๋ฐ๋ณต๋ฌธ ๋ง๋๋ ๊ณผ์ ์์: Cannot read property 'imageUrl' of undefined</summary>
  <div markdown="2">

## `Cannot read property 'imageUrl' of undefined`

๋ถ๋ชจ์ state๋ฅผ ์์์ ๋๊ฒจ์ผํ๋๋ฐ ๋๋ ์ด์ํ ๋ณ์๋ค์ props๋ก ๋๊ธฐ๊ณ  ์์๋ค. ๊ทธ๋์ state ๋ณ์์ธ shoes๋ฅผ ๊ทธ๋๋ก ShoesItem์ด๋ผ๋ ์ปดํฌ๋ํธ์ ๋๊ฒจ์คฌ๊ณ  shoes state์ ์ํ ์ ๋ณด๋ค์ด ๊ฐ์ฒด๋ก ๋ด๊ฒจ ์๋ ๊ฒ์ ํ์ธํ  ์ ์์๋ค. ๊ทธ๋ผ์๋ shoesItem ์ปดํฌ๋ํธ๊ฐ ์ ๋๋ก ๋ ๋๋ง ๋์ง ์๊ณ  ์์๋ค. shoesItem์์ console.log ๋ฅผ ์ฐ์ด๋ด๋ ์ ํ props๋ฅผ ์ธ์ํ์ง ๋ชปํ๋ค. props๋ฅผ ์๋ชป ๋๊ฒจ์ฃผ๋ ๊ตฌ๊ฐ์ console.log๋ก ์ฐพ์ ํด๊ฒฐํ๋ค.

</div>
</details>

<details>
  <summary> 6.3. ๋ ๋๋ง์ SCSS ๋ฒ์  ์ค๋ฅ </summary>
  <div markdown="3">

## `Node Sass version 5.0.0 is incompatible with ^4.0.0. `

- ๊ธฐ์กด์ CRA๋ก ๋ง๋ค์ด์ง ํ๋ก์ ํธ๋ scss 5.0 ๋ฒ์ ๊ณผ ์ถฉ๋ ๋ฐ์

```

//node-sass ์ญ์ 
$ yarn remove node-sass
//node-sass 4.14.0๋ฒ์  ์ค์น
$ yarn add node-sass@4.14.0

```

https://guswnl0610.github.io/react/react-sass-error/

</div>
</details>
<details>
  <summary> 6.4. ShoesList ์์ฒด์ onClick์ด๋ฒคํธ๊ฐ ๋จนํ์ง ์๋ ๋ฌธ์ . </summary>
  <div markdown="4">

## `์ปดํฌ๋ํธ์์๋ HTML ํน์ฑ์ธ onClick์ด๋ฒคํธ๋ฅผ ์์ฑํ  ์ ์๋ค.`

๋ฒํผ์ฒ๋ผ ์ด๋ฒคํธ๋ฅผ ์์ฑํ  ์ ์๋ ๊ณณ์์๋ <Link>๋ history๋ฅผ ์ฌ์ฉํด์ ํด๊ฒฐํ  ์ ์์๋ค. history๋ฅผ ์ด์ฉํ๋ฉด ๋์ฑ ๊น๋ํ๊ฒ ์ฌ์ฉํ  ์ ์๋ค.

</div>
</details>
<details>
  <summary> 6.5. ๋ด์ฅํจ์ filter๋ฅผ ์ฌ์ฉํ์ ๋ '===' ์ฌ์ฉ ๋ฌธ์   </summary>
  <div markdown="5">

## `'==' '===' ๋ ๋ค๋ฅด๋ค`

useParmas() ํ์ ์ด์ฉํ ๋ ๋ฐํ๋๋ id์ props์ ๋ค์ด์๋ item์ id๊ฐ ์ผ์นํ๋๊ฐ?
`===`๋ฅผ ์ฌ์ฉํ์๋ ๋ฐ์ดํฐ ํ์๊น์ง ๋น๊ตํ๋ค. params์ id๊ฐ์ string์ด๋ฏ๋ก parseInt๋ฅผ ํตํด int๋ก ๋ฐ๊ฟ์ค๋ค.

```js
let filterItem = props.shoes.filter((item) => item.id == id);

let filterItem = props.shoes.filter((item) => item.id === parseInt(id));
```

https://minsoftk.tistory.com/64  
https://minsoftk.tistory.com/65

</div>
</details>

<details>
<summary> 6.6. ์ฌ์์นดํ๊ณ ๋ฆฌ์์ ์ํ์ ํด๋ฆญํ์๋ ๋จ์๋ค ์ํ์ด ๋ฐ์ธ๋ฉ ๋๋ ์ค๋ฅ</summary>
  <div markdown="6">
  
  <br/>

props.sex ๊ฐ ์ฌ์ฑ ์นดํ๊ณ ๋ฆฌ์ผ ๊ฒฝ์ฐ "womanshoes"๋ก ๋์ด์ค๋๋ฐ "woman"๊ณผ ๋น๊ตํ๋ค. ์ด๋ฅผ "womanshoes"๋ก ๋ฐ๊ฟ์คฌ๋ค.

> ๊ธฐ์กด์ฝ๋

```js
(./component/ShoesItem.js)
let src =
		props.sex === 'woman'
			? '/womanshoes/' + props.shoes.id
			: '/manshoes/' + props.shoes.id;
```

<br/>
<br/>

> ์์ ์ฝ๋

```js
(./component/ShoesItem.js)
let src =
		props.sex === 'womanshoes'
			? '/womanshoes/' + props.shoes.id
			: '/manshoes/' + props.shoes.id;
```

  </div>
</details>

<details>
<summary> 6.7. bootstrap css ์ ์ฉ ์ค๋ฅ</summary>
  <div markdown="7">
<br/>

Navbar ์ปดํฌ๋ํธ๋ฅผ ๋ถ๋ฌ์ค๋๋ฐ Navbar.css์ a ํ๊ทธ ์ ์ฒด๋ฅผ ์ปฌ๋ฌ white๋ก ์์ ํด๋ฒ๋ ค, bootstrap css๊ฐ ์ ์ฉ์ด ๋์ง ์์๋ค.  
 ์ ์ฒด aํ๊ทธ๋ฅผ ์์ ํด๋ฒ๋ฆฌ๋ ์ฝ๋๋ฅผ ์ญ์ ํ๊ณ  `.className a { }` ๋ก ์์ 
<br/>

</div>
</details>

<details>
<summary>6.8. ์ฌ๊ณ ๊ฐ 0์ผ๋ ์ฅ๋ฐ๊ตฌ๋์ ๋ชป๋ด๊ฒ ํ๊ธฐ</summary>
  <div markdown="8">
<br/>
<br/>

- ์ฒ์์ ShoesItem์์ ์ฌ๊ณ ๊ฐ 0์ด๋ผ๋ฉด alert์ฐฝ์ ๋จ๊ฒ ํ์ง๋ง, ๋ง์ฝ ๊ฐ์ ๋ก `http://localhost:3000/manshoes/0` ์ ์ํด์ ์ฅ๋ฐ๊ตฌ๋ ๋ฒํผ์ ๋๋ ์ ๊ฒฝ์ฐ๋ฅผ ๋ง์ ์๊ฐ ์์๋ค. ๋ฐ๋ผ์ ShoesList์์ ์ฅ๋ฐ๊ตฌ๋ ๋ฒํผ์ ๋ชป ๋๋ฅด๊ฒ ๋ง์์ผ ํ๋ค. ํ์ง๋ง ์ปดํฌ๋ํธ ๋จ์์๋ onClick ์ด๋ฒคํธ์ ์์ฑํด๋ ๋ฌธ์ ๊ฐ ์์๋๋ฐ, About ํ์ด์ง์์๋ alert() ํจ์๋ฅผ ์ธ์ํ์ง ๋ชปํ๋ค.

#### [ํด๊ฒฐ ๋ฐฉ์ ํ์]

- ์ ShoesItem์์๋ alert์ฐฝ ๋ก์ง์ ๋ฃ์ ์ ์๋๋ฐ ShoesList์ ๋ชป๋ฃ์๊น ์๊ฐํด๋ดค๋ค. ์ค๋ฅ๋ alertํจ์๋ฅผ ์ฐพ์ ์ ์๋ค๊ณ  ๋ฌ๋ค. ๊ทธ๋ฌ๋ค [stackoverflow](https://stackoverflow.com/questions/54058765/typeerror-alert-is-not-a-function) ๊ธ์ ๋ดค๋๋ฐ, ํน์ ํจ์๋ฅผ ์ฌ์ ์ํ๋ ๊ฒฝ์ฐ๊ฐ ์๋์ง ํ์ธํ๋ผ๋ ๊ธ์ด์๋ค. ๊ทธ๋์ ๋ด๊ฐ ์ ์ธํ ๊ฒ๋ค์ค ๋ฌธ์ ๊ฐ ๋๋๊ฒ ์๋์ง ์ดํด๋ดค๋ค. ๊ทธ๋ฌ๋ค state ๋ณ์์ alert๋ผ๊ณ  ์ ์ํด๋์ ๊ฒ์ ํ์ธํ๋ค...๐

#### [ํด๊ฒฐ๋ฐฉ์ ์ ์ฉ]

- State ๋ณ์์ ์ด๋ฆ์ ๋ค๋ฅธ ์ด๋ฆ์ผ๋ก ๋ฐ๊ฟ์ค ๋ค, onClick ์ด๋ฒคํธ์์ ์ฌ๊ณ ๊ฐ 0์ด๋ผ๋ฉด ํ์ด์ง ์ด๋์ ํ์ง ์๊ณ  alert์ฐฝ์ ๋์ด์ค๋ค.

<br/>

<br/>

</div>
</details>

<details>
<summary>6.9. netlify๋ก ๋ฐฐํฌํ ์ฌ์ดํธ์์ ์๋ก๊ณ ์นจ์ Page Not Found ์ค๋ฅ ๋ฐ์.</summary>
  <div markdown="9">
<br/>
<br/>

- ์ฒ์์ Netlify๋ฅผ Demo๋ฅผ ๊ฐ๋จํ ๋ณด์ฌ์ฃผ๋ ์ฉ๋๋ก ๋ง๋ค์ด์ ์ด๋ฐ ์ค๋ฅ๋ค์ ์๊ฐํ์ง ๋ชปํ๋ค. SPA์์์ ๋ผ์ฐํ๋ง์ ์๊ฐํด์ ๋ฐ์ํ ์ค๋ฅ๋ค.

#### [ํด๊ฒฐ ๋ฐฉ์ ํ์]

- [Netlify Docs static route](https://docs.netlify.com/routing/overview/), [stackoverflow issue](https://stackoverflow.com/questions/58065603/netlify-renders-404-on-page-refresh-using-react-and-react-router)  
  Netlify ๊ณต์ ๋ธ๋ก๊ทธ์ ๋ด์ฉ์ด ์ค๋ช๋ผ ์์๋ค. ํ์ง๋ง ๊ฐ์ฅ ๋จผ์  ์ Netlify์์ ์๋ก๊ณ ์นจ์ ์ค๋ฅ๊ฐ ๋ฐ์ํ๋์ง ์ดํดํด์ผ ํ๋ค. ์ฌ๋ฌ ๊ธ๋ค์ ์ฝ์ด๋ณด๋ฉด์ ๋ด๋ฆฐ ๊ฒฐ๋ก ์ ๋ค์๊ณผ ๊ฐ๋ค. Netlify์์ ๋ด๊ฐ ๋ง๋  SPA๋ฅผ ๋ฐฐํฌํด์ฃผ๊ณ  ์์ง๋ง ๋ด ํ๋ก์ ํธ์ `/index.html`์ ๋ฐฐํฌํด์ฃผ๊ณ  ์๋ค. ๊ทธ๋ฆฌ๊ณ  ๊ทธ `/index.html`์์๋ React ๋ผ์ฐํ์ด ์๋ ฅ๋์ด ์๋ค. ๋ฐ๋ผ์ Netlify์์๋ ํด๋น url๋ก ์๋ก๊ณ ์นจ์ ํ์๋, React์ ๋ผ์ฐํ ์ค์ ์ ์ดํดํ์ง ๋ชปํ๋ค. ๋ฐ๋ผ์ Netlify๋ ํด๋น ๋ผ์ฐํ ์ ๋ณด๋ฅผ ๋ชจ๋ฅด๊ธฐ ๋๋ฌธ์ `Page Not Found`๋ฅผ ํ์ํ๋ค.

#### [ํด๊ฒฐ๋ฐฉ์ ์ ์ฉ]

- ์ด๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด, Netlify์์ `_redirects` ํ์ผ์ ๋ง๋ค์ด์คฌ๋ค. [Redirect options](https://docs.netlify.com/routing/redirects/redirect-options/), ์ด๊ณณ์์ ๋ค์ํ ๋ช๋ น์ด๋ค์ ํ์ธํ  ์ ์์๋ค. ์ด๋ค ๊ฒฝ๋ก๋ก ์ ์์ ํด๋ `index.html`๋ก 200์ status๋ก ์ ์ํ๋ผ๋ ๋ช๋ น์ ์๋์ฒ๋ผ Netlify์ ์๋ ฅํ๋ค. ํ์ง๋ง ์ ๊ทผ์ ๋ง์์ผ ํ๋ 404 Page๋ฅผ ๋์ฐ์ง ๋ชปํ๋ ์ค๋ฅ๋ ๋ฐ์ํ๋ค. 404 Page ๋ผ์ฐํ๋ index.html์ ์ถ๊ฐํด์ค์ผ ํ๋ค.

```
/*  /index.html  200
```

- <br/>

<br/>

</div>
</details>

<br/><br/>

# 7. ๊ฐ์ 

## 7.1. ์ค๋ฅ

- ~~์ํ ์ ํ ์ดํ ์๋์ ๋ณ๊ฒฝํ์ ๋, ๊ฒฐ์ ๊ธ์ก์ด ์ต์ ํ ๋์ง ์๋ ์ค๋ฅ~~ (21.08.26)
- ~~์ฅ๋ฐ๊ตฌ๋์์ ์ํ ์ญ์ ์ ์ฅ๋ฐ๊ตฌ๋ list ์๋ฐ์ดํธ ์ค๋ฅ~~ (21.08.26)
- ~~ํญ๋ชฉ์ ํ state์ ๊ฐ๊ฒฉ state ํฉ์น๊ธฐ~~ (useEffect ์ค๋ฅ๋ก ์ทจ์)
- ~~์ํ ์ฅ๋ฐ๊ตฌ๋๋ก ์ถ๊ฐ์ ํฉ์น State๊ฐ ๋น ๋ฐฐ์ด๋ก ๋ณํ๋ ๋ฌธ์ ~~ (useEffect ์ค๋ณต์ผ๋ก ๋น ๋ฐฐ์ด๋ก ๋ ๋๋ง.)
- ~~์ํ๋ค์ ์ด๋ฏธ์ง๊ฐ ๋ก๋ฉ๋๊ธฐ ์ ์ ์ฝํ์ธ ๋ค์ด ์ด๋ฏธ์ง ๊ณต๊ฐ์ ๊ฐ์ง๊ณ  ์์ง ์์ ํฉ์ณ์ง๋ ์ค๋ฅ~~ (21.08.28)
- ~~์ฅ๋ฐ๊ตฌ๋์ ๋ฃ๊ธฐ ์ ์ ์ฌ๊ณ ๊ฐ 0์ธ ๊ฒฝ์ฐ ๊ฒ์ฆ. ->~~ ํธ๋ฌ๋ธ์ํ 6.8. (21.09.02)
- ~~์์ธํ์ด์ง๋ก ์ด๋ ํ, ๋ค๋ก๊ฐ๊ธฐ ๋๋ ์ ๋ ๋ฒํผ ๋นํ์ฑํ๊ฐ ํ๋ฆฌ๋ ์ค๋ฅ~~ (ํธ๋ฌ๋ธ์ํ 5.6. ์์ฑ) (21.09.12)
- ์์ ํ๋ฉด์์ ๊ฒฐ์ ํ๋ฉด ์งค๋ฆผ ํ์-> img-fuild ์์ฑ ์ถ๊ฐ ํ์ง๋ง ์ด๋ฏธ์ง๊ฐ ๋ณด์ด์ง ์์.[react-responsive](https://velog.io/@st2702/%EB%B0%98%EC%9D%91%ED%98%95-%EC%9B%B9-Media-Query)์์ media query๋ก ๋ค๋ฅธ table์ ๋์  ๋ฃ์ด์ฃผ๊ธฐ
- Netlify 404 Redirection ๋ฌธ์ (์์ item ์ ๊ทผ์ map error)

## 7.2. ๊ธฐ๋ฅ ์ถ๊ฐ

- ~~์ํ ์ ์ฒด ์ ํ ๊ธฐ๋ฅ ์ถ๊ฐ.~~ (์งํ์ค)
- ๋ก๊ทธ์ธ ๊ธฐ๋ฅ ์ถ๊ฐ.
- ์ฑํ๊ธฐ๋ฅ ์ถ๊ฐ
- [๋ฒ๋ค ์ฌ์ด์ฆ ์ต์ ํ](https://roseline.oopy.io/dev/optimize-bundle-size)
- Node.js์ MongoDB ์ฐ๋ํ๊ธฐ. ์ฐ๊ฒฐํ ์ดํ '๊ฒฐ์ ' ๊ธฐ๋ฅ์ ํ์ฑํํด Data ์์ .

  <br/>
  <br/>

## ๊ฐ๋ฐ์ผ์ง

ํ๋ก์ ํธ๋ฅผ ์งํํ๋ฉด์ ๊ฐ์ธ์ ์ผ๋ก ๊ณ ๋ฏผํ๋ ๊ธฐ์ ์ , ๊ตฌ์กฐ์  ๋ฌธ์ ๋ค์ ๊ณ ๋ฏผํ๊ณ  ํด๊ฒฐ๊ณผ์ ์ ์์ฑํ ํฌ์คํธ

- [๊ฐ๋ฐ์ผ์ง1](https://minsoftk.tistory.com/66)
- [๊ฐ๋ฐ์ผ์ง2](https://minsoftk.tistory.com/67?category=872236)

  <br/>
  <br/>

## ๐ Reference

- [lazy loading](https://velog.io/@vagabondms/%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%84%B0%EB%94%94-Lazy-loading%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)
- [memo](https://ui.toast.com/weekly-pick/ko_20190731)
- [memo2](https://medium.com/wantedjobs/react-profiler%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EC%84%B1%EB%8A%A5-%EC%B8%A1%EC%A0%95%ED%95%98%EA%B8%B0-5981dfb3d934)
- https://engineering.linecorp.com/ko/blog/line-securities-frontend-4/

<hr/>

- 5.1. CORS  
   https://developer.mozilla.org/ko/docs/Web/HTTP/CORS  
   https://evan-moon.github.io/2020/05/21/about-cors/  
  https://blog.naver.com/PostView.naver?blogId=dnvld1&logNo=222039760747&redirect=Dlog&widgetTypeCall=true&directAccess=false  
  https://tried.tistory.com/m/76

- 5.4. Map  
  https://lktprogrammer.tistory.com/121  
  https://mjn5027.tistory.com/80
- 5.5. Splice
  https://im-developer.tistory.com/103

- 5.6.
  https://lion-king.tistory.com/18  
  https://www.phpschool.com/gnuboard4/bbs/board.php?bo_table=qna_html&wr_id=300154&sca=&sfl=wr_subject||wr_content&stx=history&sop=and

- 6.1.  
  https://sentry.io/answers/unique-key-prop/

- 6.3.  
  https://guswnl0610.github.io/react/react-sass-error/
- 6.4.  
  https://lannstark.tistory.com/122  
  https://gongbu-ing.tistory.com/45  
  [history ํ๋ผ๋ฏธํฐ ๊ฐ์ด ๋ณด๋ด๊ธฐ](http://lab.naminsik.com/4008)
- 6.5.  
   https://minsoftk.tistory.com/64  
  https://minsoftk.tistory.com/65
- 6.9.  
  [CRA 404 Docs](https://create-react-app.dev/docs/adding-a-router)  
  [Netlify Docs static route](https://docs.netlify.com/routing/overview/)  
  [stackoverflow issue](https://stackoverflow.com/questions/58065603/netlify-renders-404-on-page-refresh-using-react-and-react-router)

- 7
  [img lazy loading](https://helloinyong.tistory.com/297#title-2)

- 7.2

  [map ์์์ useRef](https://velog.io/@zerozoo-front/react-hooks-map-%EC%97%90%EC%84%9C-ref-%EB%A5%BC-%EC%A7%80%EC%A0%95%ED%95%98%EC%9E%90)
