//Displays variable-sized svg className={svgClasses}
//Reqs: image
//Props: width, height, color,

import Image from "next/image";
import styles from "./icon.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const Icon = ({
	color = "#000",
	name,
	width = "50",
	height = "50",
	rotate,
}) => {
	let svgClasses = cx({
		svg: true,
		[`rotate-${rotate}`]: rotate,
	});
	if (name === "logo") {
		return (
			<svg
				className={svgClasses}
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 49 54'
			>
				<path
					fill={color}
					d='M23.643.13c-4.195.765-6.83 4.003-6.83 8.32 0 7.484 8.702 11.14 14.075 5.917 3.398-3.307 3.467-8.25.139-11.766C29.12.547 26.451-.358 23.643.13Zm3.813 2.54c1.318.558 3.259 2.646 3.571 3.9.381 1.462-.07 4.316-.797 5.29-1.63 2.229-4.368 3.238-6.726 2.542-4.021-1.218-5.79-5.57-3.64-9.19 1.49-2.61 4.819-3.725 7.592-2.541Z'
				/>
				<path
					fill={color}
					d='M3.085 14.193c-.277.07-1.109.21-1.802.349L0 14.75l.693 2.507c1.352 4.908 3.328 8.18 7.003 11.627 3.12 2.924 6.795 4.908 11.163 5.987l1.387.349-.104 3.098c-.174 4.943 1.733 11.418 4.333 14.655l.659.801.901-1.358c2.773-4.212 3.883-8.006 3.917-13.402v-4.073l2.323-.766c6.83-2.193 12.93-8.25 15.219-15.073 1.63-4.909 1.664-4.63-.694-4.909-6.517-.765-14.248 2.02-19.309 6.963l-2.565 2.506-1.248-1.497c-2.323-2.89-8.182-6.405-12.342-7.415-1.699-.417-7.35-.8-8.25-.557Zm8.147 2.507c2.254.557 5.339 2.019 7.592 3.585 1.63 1.114 5.166 4.77 4.992 5.152-.07.14-.52 1.01-1.005 1.985-.52.94-1.179 2.61-1.525 3.655-.347 1.044-.694 2.02-.832 2.158-.347.348-4.993-1.253-7.211-2.506-4.368-2.437-7.835-6.37-9.846-11.07-1.317-3.133-1.317-3.481.312-3.62 1.942-.21 5.2.07 7.523.66Zm35.153-.348c.312.243-1.145 4.038-2.392 6.092-2.358 4.073-7.038 8.076-11.233 9.608-3.432 1.288-3.258 1.323-3.674-.348-.243-.836-.936-2.576-1.595-3.864-1.387-2.82-1.387-2.785 1.699-5.71 2.6-2.436 5.026-3.898 8.181-4.978 3.19-1.079 8.25-1.531 9.014-.8Zm-19.76 13.82c1.247 3.446 1.282 3.237-.555 3.446-.936.105-2.08.105-2.6 0-.832-.174-.936-.313-.763-1.114.104-.487.659-1.914 1.248-3.168.97-2.123 1.04-2.227 1.525-1.6.278.382.763 1.496 1.144 2.436Zm1.594 6.927c.277 2.124-.243 6.37-1.075 8.808-.624 1.845-1.802 4.316-2.045 4.316-.312 0-1.837-3.307-2.392-5.221-.659-2.194-1.11-7.172-.763-8.46.208-.835.382-.905 2.566-1.044 1.282-.07 2.6-.14 2.912-.174.45-.07.624.313.797 1.775Z'
				/>
			</svg>
		);
	}
	if (name === "arrow") {
		return (
			<svg
				className={svgClasses}
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 53 54'
			>
				<path
					stroke={color}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={width / 3}
					d='m18 9 17 18-17 18'
				/>
			</svg>
		);
	}
	if (name === "home") {
		return (
			<svg
				className={svgClasses}
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 43 42'
			>
				<path
					fill={color}
					d='m.5 21.662 19.515-21A2.028 2.028 0 0 1 21.5 0c.557 0 1.09.238 1.485.662l19.515 21h-4.2V39.74c0 .6-.221 1.174-.615 1.598A2.027 2.027 0 0 1 36.2 42H25.7V26.181h-8.4V42H6.8a2.028 2.028 0 0 1-1.485-.662A2.35 2.35 0 0 1 4.7 39.74V21.662H.5Z'
				/>
			</svg>
		);
	}
	if (name === "book") {
		return (
			<svg
				className={svgClasses}
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 36 40'
			>
				<path
					fill={color}
					d='M.5 6.12c0-.17.042-.337.136-.48A10.251 10.251 0 0 1 9.25 1.153C15.375 1.152 18 5.86 18 5.86v32.955s-2.625-2.354-8.75-2.354c-3.17 0-5.402.63-6.818 1.239C1.637 38.041.5 37.44.5 36.575V6.12ZM18 5.86s2.625-4.708 8.75-4.708a10.25 10.25 0 0 1 8.614 4.489.867.867 0 0 1 .136.479v30.455c0 .865-1.137 1.466-1.932 1.125-1.416-.608-3.649-1.239-6.818-1.239-6.125 0-8.75 2.354-8.75 2.354V5.86Z'
				/>
				<path
					stroke={color}
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M18 5.86s-2.625-4.708-8.75-4.708A10.25 10.25 0 0 0 .636 5.641.867.867 0 0 0 .5 6.12v30.455c0 .865 1.137 1.466 1.932 1.125 1.416-.608 3.649-1.239 6.818-1.239 6.125 0 8.75 2.354 8.75 2.354M18 5.86v32.955M18 5.86s2.625-4.708 8.75-4.708a10.25 10.25 0 0 1 8.614 4.489.867.867 0 0 1 .136.479v30.455c0 .865-1.137 1.466-1.932 1.125-1.416-.608-3.649-1.239-6.818-1.239-6.125 0-8.75 2.354-8.75 2.354'
				/>
			</svg>
		);
	}
	if (name === "info") {
		return (
			<svg
				className={svgClasses}
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 43 42'
			>
				<path
					fill={color}
					d='M21.5 0C9.92 0 .5 9.42.5 21s9.42 21 21 21 21-9.42 21-21-9.42-21-21-21Zm0 8.61a2.73 2.73 0 1 1 0 5.46 2.73 2.73 0 0 1 0-5.46Zm5.04 23.73H17.3a1.68 1.68 0 1 1 0-3.36h2.94v-9.24h-1.68a1.68 1.68 0 1 1 0-3.36h3.36a1.68 1.68 0 0 1 1.68 1.68v10.92h2.94a1.68 1.68 0 1 1 0 3.36Z'
				/>
			</svg>
		);
	}
	if (name === "mail") {
		return (
			<svg
				className={svgClasses}
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 35 28'
			>
				<path
					fill={color}
					d='M35 0H0v28h35V0Zm-3.5 7-14 8.75L3.5 7V3.5l14 8.75 14-8.75V7Z'
				/>
			</svg>
		);
	}
	if (name === "question") {
		return (
			<svg
				className={svgClasses}
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 37 38'
			>
				<path
					fill={color}
					d='M18.5.625C8.353.625.125 8.853.125 19S8.353 37.375 18.5 37.375 36.875 29.147 36.875 19 28.647.625 18.5.625Zm0 29.04a1.64 1.64 0 1 1 0-3.281 1.64 1.64 0 0 1 0 3.28Zm2.58-9.004a1.98 1.98 0 0 0-1.267 1.838v.93a.33.33 0 0 1-.329.329h-1.968a.33.33 0 0 1-.328-.328v-.882c0-.948.274-1.883.816-2.662a4.584 4.584 0 0 1 2.137-1.678c1.394-.537 2.297-1.706 2.297-2.981 0-1.81-1.768-3.282-3.938-3.282s-3.938 1.473-3.938 3.282v.311a.33.33 0 0 1-.328.328h-1.968a.33.33 0 0 1-.329-.328v-.311c0-1.612.706-3.118 1.986-4.237 1.23-1.08 2.854-1.67 4.577-1.67 1.723 0 3.347.595 4.577 1.67 1.28 1.12 1.985 2.625 1.985 4.237 0 2.37-1.562 4.503-3.982 5.434Z'
				/>
			</svg>
		);
	}
	if (name === "security") {
		return (
			<svg
				className={svgClasses}
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 37 38'
			>
				<path
					fill={color}
					d='M18.5.625C8.353.625.125 8.853.125 19S8.353 37.375 18.5 37.375 36.875 29.147 36.875 19 28.647.625 18.5.625Zm0 29.04a1.64 1.64 0 1 1 0-3.281 1.64 1.64 0 0 1 0 3.28Zm2.58-9.004a1.98 1.98 0 0 0-1.267 1.838v.93a.33.33 0 0 1-.329.329h-1.968a.33.33 0 0 1-.328-.328v-.882c0-.948.274-1.883.816-2.662a4.584 4.584 0 0 1 2.137-1.678c1.394-.537 2.297-1.706 2.297-2.981 0-1.81-1.768-3.282-3.938-3.282s-3.938 1.473-3.938 3.282v.311a.33.33 0 0 1-.328.328h-1.968a.33.33 0 0 1-.329-.328v-.311c0-1.612.706-3.118 1.986-4.237 1.23-1.08 2.854-1.67 4.577-1.67 1.723 0 3.347.595 4.577 1.67 1.28 1.12 1.985 2.625 1.985 4.237 0 2.37-1.562 4.503-3.982 5.434Z'
				/>
			</svg>
		);
	}
	if (name === "cart") {
		return (
			<svg
				className={svgClasses}
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 43 42'
			>
				<path
					fill={color}
					d='M39.455 11.168a4.083 4.083 0 0 0-3.471-2.042H9.851L8.667 4.512a2.042 2.042 0 0 0-2.042-1.51H2.542a2.042 2.042 0 1 0 0 4.083h2.531l5.635 20.947a2.042 2.042 0 0 0 2.042 1.51h18.375a2.041 2.041 0 0 0 1.817-1.122l6.697-13.393a4.085 4.085 0 0 0-.184-3.86ZM11.729 39.75a3.062 3.062 0 1 0 0-6.124 3.062 3.062 0 0 0 0 6.125Zm20.417 0a3.062 3.062 0 1 0 0-6.124 3.062 3.062 0 0 0 0 6.125Z'
				/>
			</svg>
		);
	}
	if (name === "contract") {
		return (
			<svg
				className={svgClasses}
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 43 42'
			>
				<path
					fill={color}
					d='M25.98 39.375h-5.793v-5.793l6.608-6.607a6.07 6.07 0 0 1-.045-.725 6.562 6.562 0 1 1 5.838 6.518l-6.607 6.607Zm-3.168-2.625h2.082l6.833-6.833.709.163a3.983 3.983 0 1 0-2.953-2.953l.162.709-6.832 6.833v2.081Z'
				/>
				<path
					fill={color}
					d='M33.313 27.563a1.312 1.312 0 1 0 0-2.625 1.312 1.312 0 0 0 0 2.625ZM11 7.875h15.75V10.5H11V7.875Zm0 5.25h15.75v2.625H11v-2.625Zm0 5.25h7.875V21H11v-2.625ZM11 31.5h5.25v2.625H11V31.5Z'
				/>
				<path
					fill={color}
					d='M16.25 39.375H8.375A2.628 2.628 0 0 1 5.75 36.75V5.25a2.628 2.628 0 0 1 2.625-2.625h21A2.628 2.628 0 0 1 32 5.25v11.813h-2.625V5.25h-21v31.5h7.875v2.625Z'
				/>
			</svg>
		);
	}
	if (name === "edit") {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 36 28'
			>
				<path
					fill={color}
					d='M27.344 22.227H8.656a.812.812 0 0 0-.812.812v.914c0 .112.091.203.203.203h19.906a.204.204 0 0 0 .203-.203v-.914a.811.811 0 0 0-.812-.812Zm-15.8-2.133c.05 0 .1-.005.151-.013l4.271-.749a.248.248 0 0 0 .135-.071L26.864 8.498a.253.253 0 0 0 0-.358l-4.22-4.223a.251.251 0 0 0-.18-.073.251.251 0 0 0-.18.073L11.52 14.681a.258.258 0 0 0-.07.134l-.75 4.27a.85.85 0 0 0 .239.757.86.86 0 0 0 .604.252Z'
				/>
			</svg>
		);
	}

	if (name === "published") {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 26 26'
			>
				<path
					fill={color}
					d='M10.682 19.5a1.084 1.084 0 0 1-.791-.347l-5.265-5.6a1.085 1.085 0 0 1 1.581-1.485l4.464 4.756 9.11-9.967a1.084 1.084 0 1 1 1.604 1.452l-9.902 10.833a1.084 1.084 0 0 1-.79.358h-.011Z'
				/>
			</svg>
		);
	}
	if (name === "visible") {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 26 26'
			>
				<path
					stroke={color}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2.167'
					d='M23.028 11.875a1.834 1.834 0 0 1 0 2.25c-1.617 2.11-5.497 6.458-10.028 6.458-4.53 0-8.411-4.347-10.028-6.459a1.833 1.833 0 0 1 0-2.249C4.589 9.764 8.469 5.417 13 5.417c4.53 0 8.411 4.347 10.028 6.458v0Z'
				/>
				<path
					stroke={color}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2.167'
					d='M13 16.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z'
				/>
			</svg>
		);
	}
	if (name === "monetized") {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 26 26'
			>
				<path
					fill={color}
					d='M13 16.25c-1.993 0-2.167-.932-2.167-1.083H8.667c0 .996.715 2.762 3.25 3.163v1.17h2.166v-1.17c2.167-.368 3.25-1.766 3.25-3.163 0-1.214-.563-3.25-4.333-3.25-2.167 0-2.167-.683-2.167-1.084 0-.4.759-1.083 2.167-1.083s1.506.693 1.517 1.083h2.166a3.25 3.25 0 0 0-2.6-3.12V6.5h-2.166v1.18c-2.167.358-3.25 1.756-3.25 3.153 0 1.214.563 3.25 4.333 3.25 2.167 0 2.167.737 2.167 1.084 0 .346-.672 1.083-2.167 1.083Z'
				/>
				<path
					fill={color}
					d='M5.417 2.167h-3.25v2.166h2.166V22.75a1.083 1.083 0 0 0 1.084 1.083h15.166a1.083 1.083 0 0 0 1.084-1.083V4.333h2.166V2.167H5.417Zm14.083 19.5h-13V4.333h13v17.334Z'
				/>
			</svg>
		);
	}
	if (name === "print") {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 26 26'
			>
				<path
					fill={color}
					d='M6.5 5.688A2.437 2.437 0 0 1 8.938 3.25h8.124A2.437 2.437 0 0 1 19.5 5.688V6.5h1.625a3.25 3.25 0 0 1 3.25 3.25v7.313a2.438 2.438 0 0 1-2.438 2.437h-2.274v.813a2.438 2.438 0 0 1-2.438 2.437H8.937A2.438 2.438 0 0 1 6.5 20.312V19.5H4.062a2.438 2.438 0 0 1-2.437-2.438V9.75a3.25 3.25 0 0 1 3.25-3.25H6.5v-.813Zm11.375.812v-.813a.812.812 0 0 0-.813-.812H8.938a.812.812 0 0 0-.812.813V6.5h9.75ZM6.5 8.125H4.875A1.625 1.625 0 0 0 3.25 9.75v7.313a.812.812 0 0 0 .813.812H6.5v-.813a2.437 2.437 0 0 1 2.438-2.437h8.287a2.438 2.438 0 0 1 2.438 2.438v.812h2.274a.812.812 0 0 0 .813-.813V9.75a1.625 1.625 0 0 0-1.625-1.625H6.5Zm2.438 8.125a.812.812 0 0 0-.813.813v3.25a.812.812 0 0 0 .813.812h8.287a.812.812 0 0 0 .813-.813v-3.25a.812.812 0 0 0-.813-.812H8.937Z'
				/>
			</svg>
		);
	}
	if (name === "pdf") {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 26 26'
			>
				<path
					fill={color}
					d='M19.5 19.5v3.25h-13V19.5H4.875v3.25A1.625 1.625 0 0 0 6.5 24.375h13a1.625 1.625 0 0 0 1.625-1.625V19.5H19.5Z'
				/>
				<path
					fill={color}
					d='m17.063 17.063-1.15-1.15-2.1 2.102v-6.64h-1.626v6.64l-2.1-2.101-1.15 1.149L13 21.125l4.063-4.063ZM22.75 3.25V1.625h-4.875V9.75H19.5V6.5h2.438V4.875H19.5V3.25h3.25Zm-8.938 6.5h-3.25V1.625h3.25a2.44 2.44 0 0 1 2.438 2.438v3.25a2.44 2.44 0 0 1-2.438 2.437Zm-1.624-1.625h1.624a.813.813 0 0 0 .813-.813v-3.25a.813.813 0 0 0-.813-.812h-1.624v4.875Zm-4.876-6.5H3.25V9.75h1.625V7.312h2.438a1.627 1.627 0 0 0 1.625-1.625V3.25a1.627 1.627 0 0 0-1.626-1.625ZM4.876 5.688V3.25h2.438v2.438H4.875Z'
				/>
			</svg>
		);
	}
	if (name === "trash") {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 26 26'
			>
				<path
					fill={color}
					d='M8.938 8.938a.812.812 0 0 1 .812.812v9.75a.812.812 0 1 1-1.625 0V9.75a.812.812 0 0 1 .813-.813Zm4.062 0a.812.812 0 0 1 .813.812v9.75a.812.812 0 1 1-1.626 0V9.75A.812.812 0 0 1 13 8.937Zm4.875.812a.812.812 0 1 0-1.625 0v9.75a.812.812 0 1 0 1.625 0V9.75Z'
				/>
				<path
					fill={color}
					fillRule='evenodd'
					d='M23.563 4.875A1.625 1.625 0 0 1 21.938 6.5h-.813v14.625a3.25 3.25 0 0 1-3.25 3.25h-9.75a3.25 3.25 0 0 1-3.25-3.25V6.5h-.813a1.625 1.625 0 0 1-1.625-1.625V3.25a1.625 1.625 0 0 1 1.626-1.625H9.75A1.625 1.625 0 0 1 11.375 0h3.25a1.625 1.625 0 0 1 1.625 1.625h5.688a1.625 1.625 0 0 1 1.625 1.625v1.625ZM6.692 6.5l-.192.096v14.529a1.625 1.625 0 0 0 1.625 1.625h9.75a1.625 1.625 0 0 0 1.625-1.625V6.595l-.192-.095H6.692Zm-2.63-1.625V3.25h17.875v1.625H4.063Z'
					clipRule='evenodd'
				/>
			</svg>
		);
	}
	if (name === "more") {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				fill='none'
				viewBox='0 0 26 26'
			>
				<path
					fill={color}
					d='M4.875 15.438a2.438 2.438 0 1 1 0-4.876 2.438 2.438 0 0 1 0 4.876Zm8.125 0a2.438 2.438 0 1 1 0-4.876 2.438 2.438 0 0 1 0 4.876Zm8.125 0a2.438 2.438 0 1 1 0-4.876 2.438 2.438 0 0 1 0 4.876Z'
				/>
				<rect
					width={width}
					height={height}
					x='.5'
					y='.5'
					stroke={color}
					rx='9.5'
				/>
			</svg>
		);
	}
	// if (name === "contract") {
	// 	return (

	// 	)
	// }
};
export default Icon;

//TODO: support changing the SVG fill color dynamically

// const Icon = ({
// 	iconName,
// 	alt = "alt text",
// 	width = "100",
// 	height = "100",
// 	color = "black",
// }) => {
// 	return (
// 		<Image
// 			src={`/images/icons/${iconName}_${color}.svg`}
// 			alt={alt}
// 			width={width}
// 			height={height}
// 			// layout="responsive"
// 		/>
// 	);
// };
// export default Icon;

// const Icon = ({
// 	iconName,
// 	svg,
// 	alt = "alt text",
// 	width = "50",
// 	height = "50",
// 	color = "blue",
// }) => {
// 	let iconClasses = cx({
// 		svg: true,
// 		[`color-${color}`]: color,
// 	});
// 	return (
// 		<object
// 			className={svgClasses}
// 			width={width}
// 			height={height}
// 			type='image/svg+xml'
// 			data={`/images/icons/${iconName}.svg`}
// 		>
// 			{alt} svg className={svgClasses}
// 		</object>
// 	);
// };
// export default Icon;
