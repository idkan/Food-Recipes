import Head from 'next/head'
import Link from 'next/link'
import { useCallback, useRef, useState } from 'react'

export default function Search() {

    const searchRef = useRef(null)
    const [query, setQuery] = useState('');
    const [showRecipes, setShowRecipes] = useState(false);
    const [recipes, setRecipes] = useState([]);

    const handleChange = useCallback((e) => {
        const query = e.target.value;
        setQuery(query);
        if (query.length) {
            fetch(`/api/recipes?query=${query}`).then(res => res.json()).then(data => {
                setRecipes(data.recipes);
            }).catch(err => {
                console.log(err);
            });
        } else {
            setRecipes([]);
        }
    }, []);

    const handleFocus = useCallback(() => {
        setShowRecipes(true);
        window.addEventListener('click', handleClick);
    });

    const handleClick = useCallback((e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setShowRecipes(false);
            setQuery('');
            setRecipes([]);
            window.removeEventListener('click', handleClick);
        }
    }, []);

    return (
        <div className='flex flex-col h-screen justify-between'>
            <Head>
                <title>Search Recipes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center w-full p-4">
                <div className="w-full max-w-5xl mb-4">
                    <h1 className="text-center text-2xl font-bold mb-4">
                        Search Recipes <span role="img" aria-label="">🔎</span>
                    </h1>
                    <p className="text-center text-gray-600 mb-4">
                        Search for recipes by using the form below.
                    </p>
                    <div className="flex items-center justify-center relative">
                        <input
                            type={'text'}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            value={query}
                            className="border-normal-text border border-solid box-border w-full rounded-lg text-normal-text text-sm p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Search for recipes 🍜"
                        />
                    </div>
                </div>
                <section className="w-full max-w-5xl duration-300">
                    <h2 className="text-center text-2xl font-bold mb-4">
                        Search Results
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {showRecipes && recipes.length > 0 && recipes.map(recipe => (
                            <div key={recipe.id} className="bg-white rounded shadow-md p-4">
                                <h3 className="text-xl font-bold mb-4">{recipe.title}</h3>
                                <ul className="text-gray-600">
                                    {recipe.ingredients.map(ingredient => (
                                        <li key={ingredient}>* {ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
			<footer className="flex justify-center items-center w-full p-4">
				<Link href="/">
					<a className="text-blue-500 hover:text-blue-700">
						<span role="img" aria-label="">🏠</span> Return to Home
					</a>
				</Link>
			</footer>
        </div>
    )
}
