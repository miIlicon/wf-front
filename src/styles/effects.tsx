import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`
0% {
    opacity : 20%;
}
25% {
    opacity : 40%;
}
50% {
    opacity : 70%;
}
100 % {
    opacity : 100%;
}
`;

export const spaceEffect = keyframes`
0% {
    transform: translateY(0%);
}
50% {
    transform: translateY(2%);
}
100% {
    transform: translateY(0%);
}
`;

export const flow = keyframes`
0% {
    transform: translateX(0);
}
50% {
    transform: translateX(-100%);
}
50.01%{
    transform: translateX(100%);
}
100%{
    transform: translateX(0);
}
`;

export const cloneflow = keyframes`
    from { 
        transform: translateX(0); 
    }
    to { 
        transform: translateX(-200%); 
    }
  `;

export const fadeUp = keyframes`
0% {
    opacity: 40%;
    transform: translate3d(0, 30%, 0);
}
50% {
    opacity: 60%;
    transform: translateZ(10);
}
70% {
    opacity: 80%;
    transform: translateZ(30);
}
100% {
    opacity: 100%;
    transform: translateZ(50);
}
`;

export const TextfadeUp = keyframes`
0% {
    opacity: 40%;
    transform: translate3d(0, 50%, 0);
}
50% {
    opacity: 60%;
    transform: translateZ(0);
}
70% {
    opacity: 80%;
    transform: translateZ(30);
}
100% {
    opacity: 100%;
    transform: translateZ(50);
}
`;
