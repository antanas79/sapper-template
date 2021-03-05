<script>
	import Nav from '../components/Nav.svelte';

	export let segment;

	    import { dictionary, locale } from 'svelte-i18n';
    
    // ...
    dictionary.set({
        en: {
            app: {
                title: 'Filmic',
                subtitle: 'A curated collection of eighties movies',
            },
        },
        ar: {
            app: {
                title: 'فيلميك',
                subtitle: 'مجموعة أفلام مختارة من الثمنينات',
            },
        },
    });
    locale.set('ar');
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>