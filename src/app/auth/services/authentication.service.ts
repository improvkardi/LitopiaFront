import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, firstValueFrom, Observable} from "rxjs";
import {User} from "./auth-user";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{
  private currentUserSubject: BehaviorSubject<Partial<User>>;
  public currentUserObs: Observable<Partial<User>>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject('WINDOWS') private windows:Window,
    private readonly http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Partial<User>>({logged:false});
    this.currentUserObs = this.currentUserSubject.asObservable();
    this.updateUserStatus();
  }

  public get currentUserValue(): Partial<User>{
    return this.currentUserSubject.value;
  }

  public login(){
    if (isPlatformBrowser(this.platformId)) {
      const child = window.open('/api/auth/login', '', 'toolbar=0,status=0,width=400,height=800')
      const timer = setInterval(() => {
        if (child && child.closed) {
          this.updateUserStatus();
          clearInterval(timer);
        }
      }, 500);
    }
  }

  public async logout(){
    try {
      await firstValueFrom(this.http.get('/api/auth/logout'))
    } catch (e){}
    this.updateUserStatus();
  }

  public updateUserStatus(){
    this.http.get<User>('/api/auth/status').subscribe({
      next:(value)=>{
        this.currentUserSubject.next({
          ...value,
          logged:true
        })
      },
      error:()=>{
        this.currentUserSubject.next({logged:false})
      },
    })
  }
}
