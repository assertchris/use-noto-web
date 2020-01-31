import React, { Fragment } from 'react'
import Layout from './components/layout'

const importSizes = [100, 200, 300, 400, 500, 600, 700, 800, 900]

const sampleSizes = [
    { weight: 100, name: 'hairline' },
    { weight: 200, name: 'thin' },
    { weight: 300, name: 'light' },
    { weight: 400, name: 'normal' },
    { weight: 500, name: 'medium' },
    { weight: 600, name: 'semibold' },
    { weight: 700, name: 'bold' },
    { weight: 800, name: 'extrabold' },
    { weight: 900, name: 'black' },
]

Array.prototype.firstThree = function() {
    return this.slice(0, 3)
}

Array.prototype.secondThree = function() {
    return this.slice(3, 6)
}

Array.prototype.lastThree = function() {
    return this.slice(6, 9)
}

Array.prototype.firstSix = function() {
    return this.slice(0, 6)
}

Array.prototype.secondSix = function() {
    return this.slice(3, 9)
}

const Index = function() {
    return (
        <Layout>
            <h1 className="text-2xl font-semibold">Use Noto!</h1>
            <p className="max-w-xl">
                I use Noto all over the place. I found I was repeating the same conversion + import process on every
                site. So, I built this project as a way for me to import{' '}
                <a href="https://www.google.com/get/noto/" className="text-blue-500">
                    Noto
                </a>{' '}
                quickly.
            </p>
            <p className="max-w-xl">Import the stylesheets of the variants you want into your project:</p>
            {/* prettier-ignore */}
            <code className="block bg-gray-100 p-2 text-sm overflow-x-auto">
                <details>
                    <summary>
                        There are quite a few...
                    </summary>
                    <div className="mt-2">
                        {importSizes.map(weight => 
                            <div className="whitespace-no-wrap" key={`sans-mono-${weight}`}>
                                @import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-sans-mono-{weight}.css'</span>;
                            </div>
                        )}
                        {importSizes.secondThree().map(weight => 
                            <Fragment key={`serif-${weight}`}>
                                <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif-{weight}.css'</span>;</div>
                                <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif-{weight}-italic.css'</span>;</div>
                            </Fragment>
                        )}
                    </div>
                </details>
            </code>
            <p className="max-w-xl">...or you can import everything per family:</p>
            {/* prettier-ignore */}
            <code className="block bg-gray-100 p-2 text-sm overflow-x-auto">
                <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-sans-mono.css'</span>;</div>
                <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif.css'</span>;</div>
            </code>
            <p className="max-w-xl">Then, use the fonts in your CSS:</p>
            {/* prettier-ignore */}
            <code className="block bg-gray-100 p-2 text-sm overflow-x-auto">
                <div>body {'{'}</div>
                <div className="ml-4">font-family: <span className="text-blue-500">'Noto Serif'</span>;</div>
                <div>{'}'}</div>
                <div className="mt-4">code {'{'}</div>
                <div className="ml-4">font-family: <span className="text-blue-500">'Noto Sans Mono'</span>;</div>
                <div>{'}'}</div>
            </code>
            <h2 className="text-xl font-semibold">Samples</h2>
            <div className="bg-gray-100 p-2">
                <details>
                    <summary>There are quite a few...</summary>
                    <div className="mt-2">
                        <div>
                            {sampleSizes.map(({ weight, name }) => (
                                <span
                                    className={`inline-flex w-1/2 sm:w-1/3 md:w-1/6 font-noto-sans-mono font-${name}`}
                                    key={`sans-mono-${weight}`}
                                >
                                    Sans-Mono-{weight}
                                </span>
                            ))}
                        </div>
                        <div className="mt-2">
                            {sampleSizes.secondThree().map(({ weight, name }) => (
                                <span
                                    className={`inline-flex w-1/2 sm:w-1/3 md:w-1/6 font-noto-serif font-${name}`}
                                    key={`serif-${weight}`}
                                >
                                    Serif-{weight}
                                </span>
                            ))}
                        </div>
                        <div className="mt-2">
                            {sampleSizes.secondThree().map(({ weight, name }) => (
                                <span
                                    className={`inline-flex w-1/2 sm:w-1/3 md:w-1/6 font-noto-serif font-${name} italic`}
                                    key={`serif-${weight}-italic`}
                                >
                                    Serif-{weight}-italic
                                </span>
                            ))}
                        </div>
                    </div>
                </details>
            </div>
        </Layout>
    )
}

export default Index
