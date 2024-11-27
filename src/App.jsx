import './App.css';
import heroImage from './assets/images/heroimg1.webp';

function App() {
  return (
    <>
      <div className="">
        <img
          src={heroImage}
          alt="Hero Image"
          className="hero-image w-full bg-no-repeat object-cover"
        />
        <div className="hero-text absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50">
          <h1 className="text-4xl font-bold">
            The{' '}
            <span className="text-yellow-500">
              Smart Home, Nandura
            </span>{' '}
            entity
          </h1>
          <p className="mt-2 text-xl">Your Trusted Machinery Partner</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed">
            विविध व्यवसाय सुरू करण्यास, सुरू असलेला व्यवसाय वाढवण्यासाठी लागणा-या
            सर्व प्रकारच्या मशीनचे आपले हक्काचे दालन.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
