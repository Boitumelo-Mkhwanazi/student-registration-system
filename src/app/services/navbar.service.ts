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
            name: 'Contact Us',
            link: 'contact'
        },
        {
            id: 'u3',
            name: 'About Us',
            link: 'about'
        }
    ]
}