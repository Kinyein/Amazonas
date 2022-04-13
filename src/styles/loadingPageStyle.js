import styled from "styled-components";

export const ContainerLoading = styled.div`
    .spinner {
	width: 30px;
	height: 30px;
	border: solid 4px;
	border-right-color: transparent;
	border-radius: 50%;
	animation: Spin 1s infinite;
}

@keyframes Spin {
	from {
		transform: rotate(0deg)
	}
	to {
		transform: rotate(360deg);
	}
}
`