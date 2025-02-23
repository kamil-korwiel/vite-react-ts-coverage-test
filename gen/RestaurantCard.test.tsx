import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { RestaurantCard } from '../src/components/RestaurantCard'
import userEvent from '@testing-library/user-event'


describe('RestaurantCard Component', () => {

    const t_photoUrl:string = 'http://www.example.it/photo'
    const t_name:string = 'Name'
    const t_specialty:string = 'Specialty'


    it('renders correctly with default props and can click on it', async () => {
        
        const goToPage = vi.fn()

        render(
            <ThemeProvider theme={lightTheme}>
                <RestaurantCard photoUrl={t_photoUrl} name={t_name} specialty={t_specialty} onClick={goToPage} />
            </ThemeProvider>
        )

        expect(screen.getByTestId("restaurant-card")).toBeInTheDocument()
        expect(screen.getByText(t_name)).toBeInTheDocument()
        expect(screen.getByRole("img")).toHaveAttribute('src', t_photoUrl)

        expect(screen.queryByText(/is closed/i)).not.toBeInTheDocument()
        expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
        expect(screen.queryByText(/new/i)).not.toBeInTheDocument()

        await userEvent.click(screen.getByTestId("restaurant-card"))
        expect(goToPage).toHaveBeenCalledTimes(1)
    
    })

    const t_rating:number = 5
    const t_categories:string[] = ['Category1', 'Category2']
    const t_className:string = 'Class Name'

    it('renders correctly with optional props', () => {
        
        render(
            <ThemeProvider theme={lightTheme}>
                <RestaurantCard 
                    photoUrl={t_photoUrl} 
                    name={t_name} 
                    specialty={t_specialty} 
                    rating={t_rating}
                    categories={t_categories}
                    className={t_className}
                />
            </ThemeProvider>
        )
        const classAttribute = screen.getByTestId("restaurant-card").getAttribute("class");
        const ratingRegex = new RegExp(`${t_rating}`, "i");

        expect(classAttribute).toContain(t_className);
        expect(screen.getByText(ratingRegex)).toBeInTheDocument()
        t_categories.forEach((category) => {

            expect(screen.getByText(category)).toBeInTheDocument()
        
        })
    })

    it('renders correctly Loading state', () => {
        
        render(
            <ThemeProvider theme={lightTheme}>
                <RestaurantCard 
                    photoUrl={t_photoUrl} 
                    name={t_name} 
                    specialty={t_specialty} 

                    isLoading ={true}
                />
            </ThemeProvider>
        )
        
      expect(screen.queryByTestId("restaurant-card")).not.toBeInTheDocument()
      expect(screen.queryByTestId("loading")).toBeInTheDocument()

    })

    it('renders correctly Closed restaurant and cant click on it', async () => {
        
        const goToPage = vi.fn()

        render(
            <ThemeProvider theme={lightTheme}>
                <RestaurantCard 
                    photoUrl={t_photoUrl} 
                    name={t_name} 
                    specialty={t_specialty} 
                    isClosed ={true}
                    onClick={goToPage}
                />
            </ThemeProvider>
        )
        await userEvent.click(screen.getByTestId("restaurant-card"))

        expect(goToPage).toHaveBeenCalledTimes(0)
        expect(screen.queryByText(/is closed/i)).toBeInTheDocument()

    })

    it('renders correctly New restaurant', () => {
        
        render(
            <ThemeProvider theme={lightTheme}>
                <RestaurantCard 
                    photoUrl={t_photoUrl} 
                    name={t_name} 
                    specialty={t_specialty} 

                    isNew ={true}
                />
            </ThemeProvider>
        )
        
        expect(screen.queryByText(/new/i)).toBeInTheDocument()

    })

    it('handles missing image URL gracefully', () => {
        render(
            <ThemeProvider theme={lightTheme}>
                <RestaurantCard 
                    photoUrl="" 
                    name={t_name} 
                    specialty={t_specialty} 
                />
            </ThemeProvider>
        )

        expect(screen.getByTestId("restaurant-card")).toBeInTheDocument()
        expect(screen.getByRole("img")).toHaveAttribute('src', "")
    })

    // ? This is a Generated additional tests generate by CoPilot
    // it('handles missing name gracefully', () => {
    //     render(
    //         <ThemeProvider theme={lightTheme}>
    //             <RestaurantCard 
    //                 photoUrl={t_photoUrl} 
    //                 name="" 
    //                 specialty={t_specialty} 
    //             />
    //         </ThemeProvider>
    //     )

    //     expect(screen.getByTestId("restaurant-card")).toBeInTheDocument()
    //     expect(screen.queryByText(t_name)).not.toBeInTheDocument()
    // })

    // it('handles missing specialty gracefully', () => {
    //     render(
    //         <ThemeProvider theme={lightTheme}>
    //             <RestaurantCard 
    //                 photoUrl={t_photoUrl} 
    //                 name={t_name} 
    //                 specialty="" 
    //             />
    //         </ThemeProvider>
    //     )

    //     expect(screen.getByTestId("restaurant-card")).toBeInTheDocument()
    //     expect(screen.queryByText(t_specialty)).not.toBeInTheDocument()
    // })

    // it('does not throw error when clicked without onClick handler', async () => {
    //     render(
    //         <ThemeProvider theme={lightTheme}>
    //             <RestaurantCard 
    //                 photoUrl={t_photoUrl} 
    //                 name={t_name} 
    //                 specialty={t_specialty} 
    //             />
    //         </ThemeProvider>
    //     )

    //     await userEvent.click(screen.getByTestId("restaurant-card"))
    //     expect(screen.getByTestId("restaurant-card")).toBeInTheDocument()
    // })


})