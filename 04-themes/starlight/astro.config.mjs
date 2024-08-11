import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			tableOfContents: {
				minHeadingLevel: 1,
				maxHeadingLevel: 6,
			},
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
				},
				es: {
					label: 'Español',
				},
			},
			title: {
				en: 'My Astro Site',
				es: 'Mi sitio Astro',
			},
			customCss: ['./src/styles/global.css'],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Hardware',
					items: [
						{ 
							label: 'Raspberry', 
							autogenerate: { directory: 'hardware/raspberry/' },
						},
					],
				},
				{
					label: 'Software',
					items: [
						{ 
							label: 'Ubuntu', 
							autogenerate: { directory: 'software/ubuntu/' },
						},
					],
				},				
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
			social: {}
		}),
	],
});
