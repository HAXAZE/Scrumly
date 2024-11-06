// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //     darkMode: ["class"],
// //     content: [
// //     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./components/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./app/**/*.{js,ts,jsx,tsx,mdx}",
// //   ],
// //   theme: {
// //   	extend: {
// //   		colors: {
// //   			background: 'hsl(var(--background))',
// //   			foreground: 'hsl(var(--foreground))',
// //   			card: {
// //   				DEFAULT: 'hsl(var(--card))',
// //   				foreground: 'hsl(var(--card-foreground))'
// //   			},
// //   			popover: {
// //   				DEFAULT: 'hsl(var(--popover))',
// //   				foreground: 'hsl(var(--popover-foreground))'
// //   			},
// //   			primary: {
// //   				DEFAULT: 'hsl(var(--primary))',
// //   				foreground: 'hsl(var(--primary-foreground))'
// //   			},
// //   			secondary: {
// //   				DEFAULT: 'hsl(var(--secondary))',
// //   				foreground: 'hsl(var(--secondary-foreground))'
// //   			},
// //   			muted: {
// //   				DEFAULT: 'hsl(var(--muted))',
// //   				foreground: 'hsl(var(--muted-foreground))'
// //   			},
// //   			accent: {
// //   				DEFAULT: 'hsl(var(--accent))',
// //   				foreground: 'hsl(var(--accent-foreground))'
// //   			},
// //   			destructive: {
// //   				DEFAULT: 'hsl(var(--destructive))',
// //   				foreground: 'hsl(var(--destructive-foreground))'
// //   			},
// //   			border: 'hsl(var(--border))',
// //   			input: 'hsl(var(--input))',
// //   			ring: 'hsl(var(--ring))',
// //   			chart: {
// //   				'1': 'hsl(var(--chart-1))',
// //   				'2': 'hsl(var(--chart-2))',
// //   				'3': 'hsl(var(--chart-3))',
// //   				'4': 'hsl(var(--chart-4))',
// //   				'5': 'hsl(var(--chart-5))'
// //   			}
// //   		},
// //   		borderRadius: {
// //   			lg: 'var(--radius)',
// //   			md: 'calc(var(--radius) - 2px)',
// //   			sm: 'calc(var(--radius) - 4px)'
// //   		},
// //   		keyframes: {
// //   			'accordion-down': {
// //   				from: {
// //   					height: '0'
// //   				},
// //   				to: {
// //   					height: 'var(--radix-accordion-content-height)'
// //   				}
// //   			},
// //   			'accordion-up': {
// //   				from: {
// //   					height: 'var(--radix-accordion-content-height)'
// //   				},
// //   				to: {
// //   					height: '0'
// //   				}
// //   			}
// //   		},
// //   		animation: {
// //   			'accordion-down': 'accordion-down 0.2s ease-out',
// //   			'accordion-up': 'accordion-up 0.2s ease-out'
// //   		}
// //   	}
// //   },
// //   plugins: [require("tailwindcss-animate")],
// // };


// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	darkMode: ["class"],
// 	content: [
// 	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
// 	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
// 	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
// 	],
// 	theme: {
// 	  extend: {
// 		colors: {
// 		  background: 'hsl(var(--background))',
// 		  foreground: 'hsl(var(--foreground))',
// 		  card: {
// 			DEFAULT: 'hsl(var(--card))',
// 			foreground: 'hsl(var(--card-foreground))',
// 		  },
// 		  popover: {
// 			DEFAULT: 'hsl(var(--popover))',
// 			foreground: 'hsl(var(--popover-foreground))',
// 		  },
// 		  primary: {
// 			DEFAULT: 'hsl(var(--primary))',
// 			foreground: 'hsl(var(--primary-foreground))',
// 		  },
// 		  secondary: {
// 			DEFAULT: 'hsl(var(--secondary))',
// 			foreground: 'hsl(var(--secondary-foreground))',
// 		  },
// 		  muted: {
// 			DEFAULT: 'hsl(var(--muted))',
// 			foreground: 'hsl(var(--muted-foreground))',
// 		  },
// 		  accent: {
// 			DEFAULT: 'hsl(var(--accent))',
// 			foreground: 'hsl(var(--accent-foreground))',
// 		  },
// 		  destructive: {
// 			DEFAULT: 'hsl(var(--destructive))',
// 			foreground: 'hsl(var(--destructive-foreground))',
// 		  },
// 		  border: 'hsl(var(--border))',
// 		  input: 'hsl(var(--input))',
// 		  ring: 'hsl(var(--ring))',
// 		  chart: {
// 			'1': 'hsl(var(--chart-1))',
// 			'2': 'hsl(var(--chart-2))',
// 			'3': 'hsl(var(--chart-3))',
// 			'4': 'hsl(var(--chart-4))',
// 			'5': 'hsl(var(--chart-5))',
// 		  }
// 		},
// 		borderRadius: {
// 		  lg: 'var(--radius)',
// 		  md: 'calc(var(--radius) - 2px)',
// 		  sm: 'calc(var(--radius) - 4px)',
// 		},
// 		keyframes: {
// 		  'accordion-down': {
// 			from: { height: '0' },
// 			to: { height: 'var(--radix-accordion-content-height)' },
// 		  },
// 		  'accordion-up': {
// 			from: { height: 'var(--radix-accordion-content-height)' },
// 			to: { height: '0' },
// 		  },
// 		  // Add the zoom-in and zoom-out keyframes
// 		  zoomInOut: {
// 			'0%': { transform: 'scale(1)' },
// 			'50%': { transform: 'scale(1.2)' },
// 			'100%': { transform: 'scale(1)' },
// 		  },
// 		},
// 		animation: {
// 		  'accordion-down': 'accordion-down 0.2s ease-out',
// 		  'accordion-up': 'accordion-up 0.2s ease-out',
// 		  // Add the zoom-in and zoom-out animation
// 		  'zoom': 'zoomInOut 2s ease-in-out infinite',
// 		},
// 	  },
// 	},
// 	plugins: [require("tailwindcss-animate")],
//   };
  
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  }
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		keyframes: {
		  'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' },
		  },
		  'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' },
		  },
		  // Zoom-In and Zoom-Out animation
		  zoomInOut: {
			'0%': { transform: 'scale(1)' },
			'50%': { transform: 'scale(1.2)' },
			'100%': { transform: 'scale(1)' },
		  },
		  // Color Change animation
		  colorChange: {
			'0%': { color: '#62D0C6' },    // Sky Blue
			'25%': { color: '#FAFAFA' },    // Light Gray
			'50%': { color: '#62D0C6' },    // Sky Blue
			'75%': { color: '#FAFAFA' },    // Light Gray
			'100%': { color: '#62D0C6' },   // Sky Blue
		  },
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		  // Apply zoom-in and zoom-out animation
		  'zoom': 'zoomInOut 2s ease-in-out infinite',
		  // Apply the color change animation
		  'color-change': 'colorChange 4s ease-in-out infinite',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  