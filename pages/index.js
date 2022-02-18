import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function Home() {

	const [recipes, setRecipes] = useState([]);
	const [showRecipes, setShowRecipes] = useState(false);

	useEffect(() => {
		fetch('/api/recipes').then(res => res.json()).then(data => {
			setRecipes(data.recipes);
		}).catch(err => {
			console.log(err);
		});
	}, []);


	return (
		<>
			<Head>
				<title>Recipes App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full p-4">
				<div className="w-full max-w-5xl mb-4">
					<h1 className="text-center text-2xl font-bold mb-4">
						Recipes App <span role="img" aria-label="">🍰🍕🍴</span>
					</h1>
					<p className="text-center text-gray-600 mb-4">
						A simple app to help you find recipes.
					</p>
					<div className="flex items-center justify-center">
						<button onClick={() => setShowRecipes(!showRecipes)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
							{showRecipes ? 'Hide Recipes' : 'Show Recipes'}
						</button>
						<div className="ml-4">
							<Link href="/search">
								<a className="text-blue-500 hover:text-blue-700">
									<span role="img" aria-label="">🔎</span> Search Recipes
								</a>
							</Link>
						</div>
					</div>
				</div>
				{showRecipes && (
					<section className="w-full max-w-5xl duration-300">
						<h2 className="text-center text-2xl font-bold mb-4">
							Our Recipes
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{recipes.map(recipe => (
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
				)}
			</main>
		</>
	)
}
