import { HomeComponent } from "./home.component";

export const App_ROUTES = [
  {
    path: "dynamic-component",
    loadChildren:
      "./dynamic-component/dynamic-component.module#DynamicComponentModule",
    pathMatch: "full"
  },

  {
    path: "components-inheritance",
    loadChildren:
      "./components-inheritance/components-inheritance.module#ComponentsInheritanceModule",
    pathMatch: "full"
  },
  {
    path: "compound-component",
    loadChildren:
      "./compound-component/compound-component.module#CompoundComponentModule",
    pathMatch: "full"
  },
  { path: "", component: HomeComponent, pathMatch: "full" },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];
