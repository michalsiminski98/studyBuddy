const { render, screen, fireEvent } = require('@testing-library/react');
const { renderWithThemeProvider } = require('helpers/renderWithThemeProvider');
const { useState } = require('react');
const { default: FormField } = require('./FormField');
require('@testing-library/jest-dom/extend-expect');

// const InputWithButton = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => setInputValue(e.target.value);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         name="Name"
//         id="name"
//         placeholder="Enter your name"
//       />
//       <button disabled={!inputValue}>Submit</button>
//     </>
//   );
// };

// describe('Input With Button', () => {
//   it('Render the component', () => {
//     render(<InputWithButton />);
//     screen.getByText('Submit');
//   });
//   it('Properly handles value change', () => {
//     render(<InputWithButton />);
//     const input = screen.getByPlaceholderText('Enter your name');
//     const button = screen.getByText('Submit');
//     expect(button).toBeDisabled();
//     fireEvent.change(input, { target: { value: 'rom' } });
//     expect(input).toHaveValue('rom');
//     expect(button).not.toBeDisabled();
//   });
// });

describe('Form Field', () => {
  it('Render the component', () => {
    renderWithThemeProvider(<FormField label="name" name="name" id="name" />);
  });
});
