import React from "react";

export default function ({ data }: any) {
  const d = new Date(data),
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    date = d.getDate(),
    month = d.getMonth(),
    year = d.getFullYear();
  return (
    <span>
      {date} {months[month]} {year}
    </span>
  );
}
