import React from "react";
import { Button, ExternalLink } from "src/views/components";
import { Link } from "react-router-dom";

interface WebsiteNavbarProps {}

export function WebsiteNavbar(props: WebsiteNavbarProps) {
  return (
    <>
      <ExternalLink href="https://blog.open-source-economy.com/" className="gradient-text mr-8">
        Newsletter
      </ExternalLink>
      <ExternalLink href="https://blog.open-source-economy.com/" className="gradient-text mr-8">
        Blog
      </ExternalLink>
      <ExternalLink href="/white-paper" className="gradient-text mr-8">
        White Paper
      </ExternalLink>
      <ExternalLink href="https://blog.open-source-economy.com/" className="gradient-text mr-8">
        Sign in
      </ExternalLink>
      <Button audience="ALL" level="SECONDARY" size="MEDIUM" className="!capitalize" asChild>
        <Link to="/white-paper" target="_blank">
          Join
        </Link>
      </Button>
      <Button audience="ALL" level="PRIMARY" size="LARGE" className="!capitalize" asChild>
        Support Projects
      </Button>
    </>
  );
}
