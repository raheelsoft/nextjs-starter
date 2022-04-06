import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Breadcrumb } from "antd";
import { capitalizeFirstLetter } from "../../utils/utils";

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath =
        router.asPath === "/" ? ["Posts"] : router.asPath.split("/");
      linkPath.unshift("List");
      linkPath.unshift("Home");
      setBreadcrumbs(linkPath);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {breadcrumbs.map((item, i) => (
        <Breadcrumb.Item key={item}>
          {capitalizeFirstLetter(item)}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
