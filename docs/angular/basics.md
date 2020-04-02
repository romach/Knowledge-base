## Notes

## TypeScript

- Primitive types
- Interfaces
- Generics
- Enum

## Components

- `@Component`
  - `selector` - tag to use in template
  - `templateUrl` - url of HTML template
  - `styleUrls` - url of style files
- `@Input` - marks field, value of which can be binded in template
- `@Output` - marks handler function value of which can be binded in template
- all content you pace inside your component tag is lost by default
  - use `<ng-content></ng-content>` tag inside template to pass HTML in parent component inside component tag
- lifecycle hooks
  - `constructor`
  - `ngOnChanges` - called on `@Input` property initialization and change
  - `ngOnInit` - called after initialization
  - `ngDoCheck` - called after each every change detection run
  - `ngAfterContentInit` - called after `ng-content` has been projected into view
  - `ngAfterContentChecked` - called every time the projected content has been checked
  - `ngAfterViewInit` - called after component view with children's views initialization
  - `ngAfterViewChecked` - called every time the projected view with children's views have been checked
  - `ngOnDestroy` - called after component is destroyed

## Directives

- use `@Directive` decorator to mark class as directive
- structural D. - can manipulate with DOM
  - behind the scene structural directives are converted to `ng-template`
    - `<div *ngIf="true"></div>` > `<ng-template [ngIf]="true"><div></div></ng-template>`
  - you can apply only one structural directive
  - `*ngIf`
    - for `else` condition use local reference
      - add `; else refName` to the end of conditional expression
      - wrap content for `else` condition into `ng-template`
      - add `#refName` to `ng-template`
      -  `<ng-template #refName>content...</ng-template>`
  - `*ngFor`
    - `let items of item`
    - get index of current element
      - add `; let i = index` : ``let items of item; let i = index `
  - `[ngSwitch]`
- attribute D. - change element appearance
  - `ngStyle`: `[ngStyle]="{color: 'red'}"`
    - use `[]` to show that we bind property (style) to DOM element
    - use object to describe styles
  - `ngClass`: `[ngClass]="{big: true, small: false}"`

## Decorators

- `@HostListener()` - subscribes method on event. Receives parameters:
  - `eventName` - event name. Ex: `click`, `document:click`
  - `args` - arguments. Ex: `['$event']`
  - `@HostListener('document:click', ['$event']) toggleOpen(event: Event) {}`

## Services

- inject to component via constructor
- add service class to `providers[]` key of the component : `providers: [MyService]`
  - in this case service will be available only in this component and his child
  - if you want the same service to be available in all application - add `providers: [MyService]` to their parent component (for example, `AppModule`)
    - **newer approach**: instead of adding service to `providers`, decorate service with `@Injectable({providedIn: 'root'})`
- if you want to inject something to service, you need to add `@Injectable()` to it
  - it is recommended to add  `@Injectable()` to all services
- hints:
  - receive list copy from service instead of reference link

## Module

- bundles several files into package
- @NgModule - decorates class, tells Angular that this class is module
- declarations - list of classes that will be scanned by Angular as part of our application
- bootstrap - which component should be recognized in `index.html` file
- imports - imports other modules to our one

## Databinding

- string interpolation - `{{value}}` - one-way from data source to view
  - property
  - method invocation
  - any TypeScript **expression**, that can be converted to string
- property binding - `[disabled]="value"` - one-way from data source to view
  - **target**:  *properties* of DOM elements, components, and directives, not HTML *attributes*
  - any TypeScript **expression**, that can be converted to string
- passing properties as string - `routerLink="/"`
- event binding - `(target)="statement"` - one way from view target to data source
  - sets up event handler for target's event
  - **target**: element event, component event, directive event
  - value: TypeScript statement
    - you can use `$event` inside statement
    - If the target event is a native DOM element event, then `$event` is a DOM event object
  - custom events
    - **target** - `@Output EventEmitter` property
    - to emit event invoke `EventEmitter.emit(payload)`
    - `$event` - payload
- two-way binding - `[(size)]="size"`
  - `ngModel` directive is needed - is activated by `FormsModule`
  - is equivalent to `[size]="size" (sizeChange)="size=$event"`
  - if property is absent in component, it will be created

## Templates

- local reference
  - stores reference of HTML element in template scope
  - is declared with `#` prefix
  - is used without `#` prefix
  - `<input #userNameInput/>`
- if you want to use local reference inside component
  - create property `@ViewChild('referenceName') referenceName: ElementRef;`
  - if you want to use this property in `ngOnInit()`, add `{static: true}`: `@ViewChild('referenceName', {static: true}) referenceName: ElementRef;`
- if you want to use local reference inside `ng-content`
  - use  `@ViewChild('referenceName') referenceName: ElementRef;`, add `{static: true}` for `ngOnInit`

## Coding style guide

- components
  - directory name - `hero-list`
  - file name -`hero-list.component.ts`
  - class name - `HeroListComponent`
  - selector - `app-hero-list`
  - template url - `hero-list.component.html`
- directives
  - selector - `'[appValidate]'`
  - class name - `ValidateDirective`
- pipes
  - name - `initCaps`
  - class name - `InitCapsPipe`
- model
  - class name - `hero.model.ts`

## Pass callback from child component to parent component

- in child component
  - add `@Output emitted = new EventEmitter<number>()`
  - emit event: `this.emitted.emit(1)`
- in parent template
  - bind method to `emitted` output of child component: `<child (emitted)="onEmit()"></child>`

## Forms

Two types

- Template Driven Forms - use `[(ngModel)]` directive from `FormsModule` to create two-way data binding between component property and form input field
- Reactive Forms

## Styles

Styles are encapsulated in their component

- unique attributes are added to HTML tags inside the component
- unique suffices are added to component styles

To change default encapsulation behavior you need to set `encapsulation` property to component

- `ViewEncapsulation.Emulated` - default
- `ViewEncapsulation.Native` - similar to `Emulated` but uses shadow DOM technology
- `ViewEncapsulation.None` 
  - additional attribute is not added to HTML element
  - additional prefix is not added to styles
  - styles are applied globally

## EventEmitter

- `emit(payload)` - emit event
- `subscribe(callback)` - run callback on emitting event

## Routes

### Add routing to application

- add constant with routes to `AppModule`.
  **Note:** `Routes` is equivalent to `Route[]`

  ```
  const routes:Routes = [...]
  ```

- add `RouterModule` to the `imports` of your main module and register routes with `RouterModule`

  - `RouterModule.forRoot(appRouts)`

- add `<router-outlet></router-outlet>` to place in template where you want to display component from route

`Route` - describes single route

- `path` - path of url after domain. **Note:** don't add `/` at start
  - add `pathMatch: 'full'` to main route if redirect: `{ path: '', pathMatch: 'full', redirectTo: '/recipes'}` - **note** - use absolute path in `redirectTo`
- `component` - component class to show

#### Extract routing config to separate module

- create `app-routing.module.ts`
- create and export `AppRoutingModule` class
  - move `appRoutes` from `AppModule` to `AppRoutingModule`
  - decorate with `@NgModule` directive
    - add `RouterModule.forRoot(appRoutes)` to `imports`
    - add `exports: [RouterModule]`
- add `AppRoutingModule` to `AppModule` imports
- **note** - to use router's directives you need to import `Router` module in your main module

### Add routes to link

- add `routerLink` directive to link with path from route - `/servers`
  - use `/` at the beginning for the absolute path
  - you can use relative or absolute path
- add `routerLink=""` to link if you have `(click)` handler and `href="#"`

### Add class to element depending of route

- to add class to element if you are on specific route
  - add directive `routerLinkActive="className"` to the element with route
  - you can add `routerLinkActive` to ancestor element either
  - add `[routerLinkActiveOptions]="{ exact: true }"` to root (`/`) path so that class was added only when url is `/` but not `/someth...`

### Change route programmatically

- inject `Router` to component via controller
- user `Router.navigate()` method to change route
  - `this.router.navigate(['/about'])`

### Add template parameters (`/users/:id`) to routes

To get access to route parameters

- inject `ActivatedRoute`

- get route's parameter

  - `this.route.snapshot.params['id']`

- if you need to go to the current page be router link but with different parameters, you need to subscribe on route parameters changes

  ```javascript
  this.route.params.subscribe((params:Params)=>{this.person.id = params['id']})
  ```

### Add url parameters (`/users?id=1#otherInfo`) to routes

- in route
  - `<a [routerLink]="['/users', 1]" [queryParams]="{id:1}" fragment="otherInfo"></a>`
- programmatically
  - `this.router.navigate(["/users", 1], {queryParams: {id: 1}, fragment: "otherInfo"})`

### Get url parameters

- use `ActivatedRoute`
  - get initial data
    - `.snapshot.queryParams`
    - `.snapshot.fragment`
  - subscribe to route info changes
    - `.queryParams.subscribe()`
    - `.fragment.subscribe()`

### Add child routes

- add `children: Routes` to route
- delete parent prefix from route
- add `<router-outlet></router-outlet>` for child route

### Navigate to children route programmatically

- add `relativeTo` property with relative `Route` value
  - `route.navigate(['create'],{relativeTo:this.route})`
- preserve other query parameters
  - `route.navigate(['create'],{relativeTo:this.route, queryParamsHandling: 'params'})`

### Redirect to page-not-found

Add to `Routes` config:

```javascript
{ path: '404', component: PageNotFoundComponent},
{ path: '**', redirectTo: "/404"}
```

**Note:** `'**'` route must be the last one

### Add AuthGuard

- create `auth-guard.service.ts`

  - create class `AuthGuard implements CanActivate`

  - implement `authService.isAuthenticated()` that  will return `Promise`, which will resolve to `true` or `false`

  - implement `canActivate()` method

    ```
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    	: Observerable<boolean> | Promise<boolean> | boolean {
    	    return this.authService.isAuthenticated().then((isAuthenticated: boolean) => {
          if (isAuthenticated) {
            return true
          } else {
            this.router.navigate(['/']);
            return false;
          }
        })
    	}
    ```

- apply guard

  - add `canActivate:[AuthGuard]` to route that should be protected

- protecting child routes

  - add `canActivateChild()` method to `AuthGuard` with similar signature as `canActivate()`
  - add `canActivateChild:[AuthGuard]` to protect route's children

### Forbid to leave route

- create `can-deactivate-guard.service.ts`

  ```typescript
  export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  }
  
  @Injectable({providedIn: 'root'})
  export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(
      component: CanComponentDeactivate,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 	 {
        return component.canDeactivate()
    }
  }
  ```

- fix component
  - implement `CanComponentDeactivate` interface
  - implement   `canDeactivate()` method

### Add data to route

- add `data` object to route properties

- in component inject `ActivatedRoute`

- get data from `ActivatedRoute`

  - get on init: `this.message = this.activatedRoute.snapshot.data["message"];` **OR**

  - subscribe:

    ```typescript
    this.activatedRoute.data.subscribe((data: Data) => {
      this.message = data["message"];
    }) 
    ```

### Fetch async data with routers

- create service `DataResolver` that will implement `Resolve<Entity>` (here `Entity` - custom class)

- use `ActivatedRouteSnapshot` in `resolve()` method to retrieve route's parameter and then retrieve data from service according this parameter

- add `resolve` property: (`resolve: {entity: DataResolver}`) to route

- `data` will be accessible in container

  - in `ngOnInit()` method subscribe to `ActivatedRoute.data`

    ```typescript
    this.route.data.subscribe((data:Data)=>{this.entity = data['entity']})
    ```

### Activate routing with `#`

- add `useHash:true` to router configuration: `RouterModule.forRoot(appRoutes, {useHash: true})`

## Observable

- `Observerable` (**Oe**) - wrapper of data source(stream of data)
  - when **Oe** emits error, it stops emitting data
- `Observer` **Or** - object with `next(value)`, `error(value)` and `complete()` functions
- `.subscribe(Observer)`
  - subscribes **Or** to **Oe**
  - starts **Oe** execution

### Package types	

- data - `next()`
- error - `error()`
- completion status - `complete()`

### Create Observable

```typescript
const observerable: Observable<number> = interval(1000)
const subscription = observerable.subscribe(number => console.log(number))
subscription.unsubscribe()
```

You need to unsubscribe from `Observable` to prevent memory leaks.

Angular automatically unsubscribe from system observables.

### Operators

- *pipeable* operator
  - takes one Observable as input
  - doesn't change input Observable instance
  - returns new Observable, whose logic is based on the first Observable
  - pure function
- *creation* operators
  - create Observsble 

#### Piping

- more readable alternative of using pipeable operators
  - `map(x => x * 2)(of(1, 2))` => `of(1, 2).pipe(map(x => x * 2))`

### Subscription

- execution of an Observable

### Subject

- Every Subject is an Observable
  - Observable that multicast events to multiple Observers
  - `.subscribe()` does not invoke a new execution, it simply registers the given Observer in a list of Observers
- Every Subject is an Observer