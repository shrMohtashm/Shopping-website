import { render, screen } from "@testing-library/react"
import Contact from "../Components/footer/Contact"
import Links from "../Components/footer/Links"
import { MemoryRouter } from 'react-router-dom';
import AboutUs from "../Components/footer/AboutUs";
import SocialMedia from "../Components/footer/SocialMedia";

test('render ContactUs successfully', () => {
    render(<Contact />)

    const contactUsHeading = screen.getByRole('heading', {
        name: /تماس با ما/i
    })
    const contactUsEmail = screen.getByText(/info@example\.com/i)

    expect(contactUsEmail).toBeInTheDocument()
    expect(contactUsHeading).toBeInTheDocument()

})


test('render Links component with provided path and title', () => {
    const path = 'https://www.example.com';
    const title = 'Example Link';

    render(
        <MemoryRouter>
            <Links path={path} title={title} />
        </MemoryRouter>
    );

    const linkElement = screen.getByRole('link', { name: title });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', path);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveClass('text-decoration-none');
})

test('render Aboutus component correctly', () => {

    render(<AboutUs />)

    const aboutUsHeading = screen.getByRole('heading', {
        name: /درباره فروشگاه/i
    });
    const aboutUsParagraph = screen.getByText(/لورم ایپسوم متن ساختگی/i);

    expect(aboutUsHeading).toBeInTheDocument()
    expect(aboutUsParagraph).toBeInTheDocument()
})

test('render socialMedia icons correctly',()=>{

    render(<SocialMedia />)

    const googleIcon=screen.getByTestId('googleIcon')

    expect(googleIcon).toBeInTheDocument()
})