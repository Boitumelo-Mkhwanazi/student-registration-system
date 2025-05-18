import { HttpClient } from "@angular/common/http";
import { DestroyRef, inject, Injectable, signal } from "@angular/core";

interface Item {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class FacultyService {
    faculties = signal<Item[]>([]);
    private httpClient = inject(HttpClient);
    private destroyRef = inject(DestroyRef);

    constructor() {
        const subscription = this.httpClient.get("http://localhost:3000/api/module/all/faculty")
        .subscribe({
            next: (responseData: any) => {
                this.faculties.set((responseData.data));
            },
            error: (error) => {
                console.log(error)
            }
            })

            this.destroyRef.onDestroy(() => {
            subscription.unsubscribe();
        })
    }
}