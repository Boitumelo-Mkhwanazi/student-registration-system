import { Injectable } from "@angular/core";

export interface navLink {
    id: string,
    name: string,
    link: string
}

@Injectable ({providedIn: 'root'})
export class NavbarService {
    navLinks : navLink[] = [
        {
            id: 'u1',
            name: 'Home',
            link: ''
        },
        {
            id: 'u2',
            name: 'About Us',
            link: 'about'
        },
        {
            id: 'u3',
            name: 'Contact Us',
            link: 'contact'
        },
        
    ]
}