import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { RestaurantCard } from '../src/components/RestaurantCard'
import userEvent from '@testing-library/user-event'


describe('Logo Component', () => {

    const t_photoUrl:string = 'http://www.example.it/photo'
    const t_name:string = 'Name'
    const t_specialty:string = 'Specialty'
    const t_rating:number = 5
    const t_categories:string[] = ['Category1', 'Category2']
    const t_className:string = 'Class Name'
       


    it('renders correctly with default props', () => {
        
        render(
            <ThemeProvider theme={lightTheme}>
                <RestaurantCard photoUrl={t_photoUrl} name={t_name} specialty={t_specialty} />
            </ThemeProvider>
        )

      expect(screen.getByTestId("restaurant-card")).toBeInTheDocument()
      expect(screen.getByText(t_name)).toBeInTheDocument()
      expect(screen.getByRole("img")).toHaveAttribute('src', t_photoUrl)

    })
})