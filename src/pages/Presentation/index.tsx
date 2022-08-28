import React from 'react'

export default function Presentation() {
	return (
		<div className="presentation">
			<header className="presentation__header">
				<title>Welcome to my Web Foundation</title>
				<p>It will be used to create my futures project</p>
			</header>

			<main className="presentation__main">
				<section className="main__benefits">
					<h1>Template</h1>
					<p>
						It is important because I can start new projects much faster with
						everything I need.
					</p>
				</section>
				<section className="main__benefits">
					<h1>Styles</h1>
					<p>
						It will define what styles and what CSS framework or lib I will use
						in another projects
					</p>
				</section>
				<section className="main__benefits">
					<h1>Tests</h1>
					<p>
						Here we will have test patterns that we could use in another
						projects.
					</p>
				</section>
				<section className="main__benefits">
					<h1>Architecture</h1>
					<p>
						The idea here is really we have a foundation project, what will
						determine our architecture and our folder organize
					</p>
				</section>
			</main>
		</div>
	)
}
