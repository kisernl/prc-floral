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
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			screens: {
				'lg': '825px',
			},
			colors: {
				border: 'rgb(var(--border))',
				input: 'rgb(var(--input))',
				ring: 'rgb(var(--ring))',
				background: 'rgb(var(--background))',
				foreground: 'rgb(var(--foreground))',
				primary: {
				  DEFAULT: 'rgb(var(--primary))',
				  foreground: 'rgb(var(--primary-foreground))'
				},
				secondary: {
				  DEFAULT: 'rgb(var(--secondary))',
				  foreground: 'rgb(var(--secondary-foreground))'
				},
				destructive: {
				  DEFAULT: 'rgb(var(--destructive))',
				  foreground: 'rgb(var(--destructive-foreground))'
				},
				muted: {
				  DEFAULT: 'rgb(var(--muted))',
				  foreground: 'rgb(var(--muted-foreground))'
				},
				accent: {
				  DEFAULT: 'rgb(var(--accent))',
				  foreground: 'rgb(var(--accent-foreground))'
				},
				popover: {
				  DEFAULT: 'rgb(var(--popover))',
				  foreground: 'rgb(var(--popover-foreground))'
				},
				card: {
				  DEFAULT: 'rgb(var(--card))',
				  foreground: 'rgb(var(--card-foreground))'
				},
				sidebar: {
				  DEFAULT: 'rgb(var(--sidebar-background))',
				  foreground: 'rgb(var(--sidebar-foreground))',
				  primary: 'rgb(var(--sidebar-primary))',
				  'primary-foreground': 'rgb(var(--sidebar-primary-foreground))',
				  accent: 'rgb(var(--sidebar-accent))',
				  'accent-foreground': 'rgb(var(--sidebar-accent-foreground))',
				  border: 'rgb(var(--sidebar-border))',
				  ring: 'rgb(var(--sidebar-ring))'
				},
				// Custom pregnancy center color palette
				rose: {
					50: '#fdf2f8',
					100: '#fce7f3',
					200: '#fbcfe8',
					300: '#f9a8d4',
					400: '#f472b6',
					500: '#ec4899',
					600: '#db2777',
					700: '#be185d',
					800: '#9d174d',
					900: '#831843',
				},
				sage: {
					50: '#f6f7f6',
					100: '#e3e8e3',
					200: '#c7d2c7',
					300: '#a1b5a1',
					400: '#7a967a',
					500: '#5d7c5d',
					600: '#4a634a',
					700: '#3d503d',
					800: '#334233',
					900: '#2b372b',
				},
				cream: {
					50: '#fffef7',
					100: '#fffbeb',
					200: '#fef3c7',
					300: '#fde68a',
					400: '#fcd34d',
					500: '#fbbf24',
					600: '#f59e0b',
					700: '#d97706',
					800: '#b45309',
					900: '#92400e',
				}
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
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
