// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  app: {
    url: {
      dashboard: 'http://localhost:4200/dashboard',
    },
  },
  server: { health: 'http://localhost:5001/health' },
  api: {
    v1: {
      cache: {
        project: {
          all: 'v1-project-all',
          id: 'v1-project-id-',
        },
        table: {
          id: 'v1-table-id-',
        },
        column: {
          id: 'v1-column-id-',
        },
        user: {
          all: 'v1-user-all',
          id: 'v1-user-id-',
        },
        task: {
          id: 'v1-task-id-',
        },
        comment: {
          id: 'v1-comment-id-',
        },
      },
      url: {
        project: 'https://localhost:5000/api/v1.0/projects',
        user: {
          all: 'https://localhost:5000/api/v1.0/users',
          registration: 'https://localhost:5000/api/v1.0/users/registration',
        },
        table: 'https://localhost:5000/api/v1.0/tables',
        column: 'https://localhost:5000/api/v1.0/columns',
        task: 'https://localhost:5000/api/v1.0/tasks',
        comment: 'https://localhost:5000/api/v1.0/comments',
      },
    },
    v1_1: {
      cache: {
        project: {
          all: 'v1_1-project-all',
          search: 'v1_1-project-search-',
        },
      },
      url: {
        project: 'https://localhost:5000/api/v1.1/projects',
      },
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
