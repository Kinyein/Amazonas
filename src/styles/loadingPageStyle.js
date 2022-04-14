import styled from "styled-components";

export const ContainerLoadingPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 15%;

	h1{
		font-size: 50px;
	}

    img{
        width: 280px;
    }
	
`
export const SpinnerLoading = styled.div`
	width: 30px;
	height: 30px;
	margin: 50px;
	border: solid 4px #F0AD64;
	border-right-color: transparent;
	border-radius: 50%;
	animation: Spin 1s infinite;

	@keyframes Spin {
		from {
			transform: rotate(0deg)
		}
		to {
			transform: rotate(360deg);
		}
}
`