import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sora': ['Sora', 'sans-serif']
			},
			colors: {
				border: '#362c49', // jazz dark border
				input: '#41355b', // slightly lighter for input
				ring: '#c47f10', // gold accent ring
				background: '#181729', // deep indigo blue
				foreground: '#DCD6F7', // soft light purple
				primary: {
					DEFAULT: '#7B1FA2', // moody purple
					foreground: '#FFF8E1', // light gold for accents
				},
				secondary: {
					DEFAULT: '#231942', // deep dark purple
					foreground: '#E0A458', // gold
				},
				destructive: {
					DEFAULT: '#F73F52',
					foreground: '#fff'
				},
				muted: {
					DEFAULT: '#39366d',
					foreground: '#b8afd8'
				},
				accent: {
					DEFAULT: '#F7C873', // gold jazz
					foreground: '#1A1F2C' // dark base for jazz effect
				},
				popover: {
					DEFAULT: '#201f32',
					foreground: '#DCD6F7'
				},
				card: {
					DEFAULT: '#222040',
					foreground: '#FFF8E1'
				},
				sidebar: {
					DEFAULT: '#181729',
					foreground: '#DCD6F7',
					primary: '#7B1FA2',
					'primary-foreground': '#FFF8E1',
					accent: '#F7C873',
					'accent-foreground': '#181729',
					border: '#362c49',
					ring: '#c47f10'
				},
				"jazz-gold": "#F7C873",
				"jazz-purple": "#7B1FA2",
				"jazz-midnight": "#231942",
				"jazz-dark": "#181729",
				"jazz-mauve": "#DCD6F7",
			},
			backgroundImage: {
				'jazz-gradient': 'linear-gradient(120deg, #1a1f2c 0%, #7B1FA2 80%, #F7C873 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
