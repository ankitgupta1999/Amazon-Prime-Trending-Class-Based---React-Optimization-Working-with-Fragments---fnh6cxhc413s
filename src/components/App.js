
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlideIndex: 0
    };
  }

  handleNext = () => {
    const { currentSlideIndex } = this.state;
    const { slides } = this.props;
    const lastIndex = slides.length - 1;

    if (currentSlideIndex === lastIndex) return;

    this.setState({ currentSlideIndex: currentSlideIndex + 1 });
  };

  handlePrev = () => {
    const { currentSlideIndex } = this.state;

    if (currentSlideIndex === 0) return;

    this.setState({ currentSlideIndex: currentSlideIndex - 1 });
  };

  handleRestart = () => {
    this.setState({ currentSlideIndex: 0 });
  };

  render() {
    const { slides } = this.props;
    const { currentSlideIndex } = this.state;
    const currentSlide = slides[currentSlideIndex];
    const isFirstSlide = currentSlideIndex === 0;
    const isLastSlide = currentSlideIndex === slides.length - 1;

    return (
      <div>
        <h1 data-testid="title">{currentSlide.title}</h1>
        <p data-testid="text">{currentSlide.text}</p>

        <button
          data-testid="button-restart"
          onClick={this.handleRestart}
          disabled={isFirstSlide}
        >
          Restart
        </button>

        <button
          data-testid="button-prev"
          onClick={this.handlePrev}
          disabled={isFirstSlide}
        >
          Prev
        </button>

        <button
          data-testid="button-next"
          onClick={this.handleNext}
          disabled={isLastSlide}
        >
          Next
        </button>
      </div>
    );
  }
}

export default App;

