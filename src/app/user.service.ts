import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class UserService implements Resolve<{
  lastName: string,
  firstName: string,
  router: string
}[]> {

  constructor(private http: HttpClient) {}

  loadUsers(): Promise<any> {
    return this.http.get<{
      lastName: string,
      firstName: string,
      router: string
    }[]>('http://localhost:8080/api/crm/users').toPromise().catch((e) => {
        console.log('error');
        console.log(e);
    });
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ lastName: string; firstName: string; router: string }[]> | Promise<{ lastName: string; firstName: string; router: string }[]> | { lastName: string; firstName: string; router: string }[] {
    return this.loadUsers();
  }

}
