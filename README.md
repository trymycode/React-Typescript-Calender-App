# Development Exercise

The following is a practical programming test designed to allow to showcase my development skills and form a point of technical discussion in any forthcoming interview.

I have focused on coding standards and techniques that stand out.

## React Calendar

An organisation is building a React component library, which various front-end React solutions can import and use in their projects.

This component should use the date prop and render a simple calendar for the given date's year and month, with its date highlighted. See [cal-2022-10-03.png](./cal-2022-10-03.png) for an example of what the calendar component might render if the date of 03/10/2022 was passed in as a prop. Likewise, a calendar with a date prop of 23/03/2020 might render [cal-2020-03-23.png](./cal-2020-03-23.png).

I have implemented this component in React TypeScript or React JavaScript. I have used CSS modules. I have used appropriate bootstrapping tool, Create React App, to get started:

`npx create-react-app cal --template typescript`

## Requirements

- A reusable calendar component which has a `date` prop.
- The first row of the calendar should display the `date` prop's month and year.
- The second row of the calendar should display the days of the week, one per column.
- The following rows should display the dates for the `date` prop's month and year, appropriately aligned with the day headings.
- The appropriate date cell should be highlighted based on the `date` prop.
