module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			keyframes: {
				headShake: {
					"0%": {
						transform: "translateX(0)",
					},
					6.5: {
						transform: "translateX(-6px) rotateY(-9deg)",
					},
					"18.5%": {
						transform: "translate(5px) rotateY(7deg)",
					},
					"31.5%": {
						transform: "translate(-3px) rotateY(-5deg)",
					},
					"43.5%": {
						transform: "translate(2px) rotateY(3deg)",
					},
					"50%": {
						transform: "translateX(0)",
					},
				},
				wiggle: {
					"0%, 100%": {
						transform: "rotate(-1deg)",
					},
					"50%": {
						transform: "rotate(1deg)",
					},
				},
			},
			animation: {
				headShake: "headShake 2s infinite",
				wiggle: "wiggle 1s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
