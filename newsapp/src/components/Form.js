import React, { Component } from 'react';

function Form(){
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // You can perform any necessary data validation and submission logic here
    // For this example, we'll just log the form data
    console.log('Submitted Data:', this.state);

    // Reset the form after submission
    this.setState({
      title: '',
      content: '',
      imageUrl: '',
    });
  };

  render() {
    return (
      <div>
        <h2>Submit a News Article</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="imageUrl">Image URL (optional):</label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
