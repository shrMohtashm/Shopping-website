import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Footer from "components/Footer";
import { links } from "utils/data";
import { MemoryRouter } from "react-router-dom";
jest.mock('utils/data', () => ({
    links: [
      { id: 1, title: 'Link 1', path: '/link1' },
      { id: 2, title: 'Link 2', path: '/link2' },
    ],
  }));

describe('Footer component', () => {
    test('renders correctly with the provided links', () => {
     
      render(<MemoryRouter><Footer /></MemoryRouter>);
     
      links.forEach((link) => {
        expect(screen.getByText(link.title)).toBeInTheDocument();
      });
  
      expect(screen.getByText('About shopping website')).toBeInTheDocument()
      expect(screen.getByText('Contact Us')).toBeInTheDocument();
      expect(screen.getByText('Iran - Tehran')).toBeInTheDocument();
      expect(screen.getByText('info@example.com')).toBeInTheDocument();
      expect(screen.getByText('01 234 567 88')).toBeInTheDocument();
   
    });
  });