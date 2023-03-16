SearchExercises.js
- Wrapped setBodyParts in callback, fixed bug with string ("all") issue which broke the app.
- Fixed search functionality
- Fixed search(call apis) on every keystroke

HorizontalScrollBar.js is commented out, replaced with TestCarousel.js in utils (dont' forget to change SimilarExercises carousel)
I removed previous carousel for reasons:
- bad perfomance (useContext, Memos in their dist)
- a lot of code to do
- this one weight less

index.js
- removed strict mode to reduce api calls
p.s. better solution to use Tanstack(React)-query to cash api calls. Link here https://tanstack.com/query/v4/docs/react/overview

Additionals that are not needed but highly recommended:
- For future contributors need to say to install "react-scripts" who doesn't work with webpack
- Eslint. Better to install it and configure it to get full support of linting. Link here https://www.npmjs.com/package/eslint-plugin-react
- Prettier can help with readability. Link here https://prettier.io/
- No need for react router if we are not switching pages, if partial redirect(navigate to a different part, then simple "a" tag can suffice our needs)
- Routes should be separated from pages for better maintainability
- To create mock data to finish app or test some stuff out, there a website https://dummyjson.com/ (so no need to rely too much on rapid api)

Errors:
- Mixing yarn and npm in the same repo can cause bugs => 
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'react-loader-spinner@6.0.0-0',
npm WARN EBADENGINE   required: { npm: 'please-use-yarn', yarn: '>= 1.19.1' },
npm WARN EBADENGINE   current: { node: 'v18.14.0', npm: '9.3.1' }
npm WARN EBADENGINE }

