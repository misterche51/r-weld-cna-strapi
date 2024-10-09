import { TBreadcrumbItem } from "@/app/shared";
import { usePathname } from "next/navigation";
import { BREADCRUMBS_DICTIONARY } from "@/api/catalog/categories";
import DB from "@/api/db";
const getTranslatedBreadcrumbLabel = (label: string) =>
  BREADCRUMBS_DICTIONARY[label] ?? label;
type TUseBreadcrumbsProps = boolean;
const useBreadcrumbs = (isFromMainPage: TUseBreadcrumbsProps = false) => {
  const path = usePathname();
  const pathes = path.split("/");
  const crumbs: TBreadcrumbItem[] = [];
  if (isFromMainPage) {
    return [
      {
        label: getTranslatedBreadcrumbLabel("home"),
        target: "/",
      },
    ];
  }

  const rootBreadcrumb = {
    label: getTranslatedBreadcrumbLabel(pathes[1]),
    target: pathes[1],
  };
  let prevTarget = pathes[1];
  for (let i = 2; i < pathes.length; i++) {
    prevTarget += `/${pathes[i]}`;
    const label = pathes[i];
   
    crumbs.push({
      label: getTranslatedBreadcrumbLabel(label),
      target: prevTarget,
    });
  }

  if (rootBreadcrumb.target === 'blog' && crumbs[crumbs.length - 1]) {
    // @ts-expect-error
    crumbs[crumbs.length - 1].label = DB.posts[+crumbs[crumbs.length - 1].label].articleTitle
  }
    
  const breadcrumbs: TBreadcrumbItem[] = [{
    label: getTranslatedBreadcrumbLabel("home"),
    target: "/",
  }, rootBreadcrumb, ...crumbs];

  return breadcrumbs;
};

export default useBreadcrumbs;
