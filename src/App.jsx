import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikePost2 from './components/project-hoc/LikePost2';
import LikeImage2 from './components/LikeImage';
import RenderProps from './components/project-render/RenderProps';
import LikeImage3 from './components/project-render/LikeImage3';
import LikePost3 from './components/project-render/LikePost3';

function App() {
  return (
    <div>
    {/* Project HOC */}
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost2/>
        <LikeImage2/>
      </div>

      {/* Project RenderProps */}
      <h3>Some more Blogs</h3>
      <div className='buttons'>
      <RenderProps
          render={(count, handleCount) => (
            <LikePost3  count={count}
            handleCount={handleCount} />
          )}
        />
        <RenderProps
          render={(count, handleCount) => (
            <LikeImage3  count={count}
            handleCount={handleCount} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
