import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

import { Resource } from '../_models/resource';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.serviceUrl);
  }

//   updateResource(user: Resource): Observable<Resource> {
//     return this.http.patch<Resource>(`${this.serviceUrl}/${resource.userId}`, user);
//   }

  addResource(resource: Resource): Observable<Resource> {
    return this.http.post<Resource>(this.serviceUrl, resource);
  }

//   deleteResource(id: number): Observable<Resource> {
//     return this.http.delete<User>(`${this.serviceUrl}/${id}`);
//   }

//   deleteResources(users: Resource[]): Observable<Resource[]> {
//     return forkJoin(
//       users.map((user) =>
//         this.http.delete<User>(`${this.serviceUrl}/${user.id}`)
//       )
//     );
//   }
}
