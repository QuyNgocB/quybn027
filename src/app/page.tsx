import React from "react";
import { redirect } from "next/navigation";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export default function Home() {
  redirect("/about");
  return null;
}
