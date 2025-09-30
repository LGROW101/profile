// components/TechIcons.tsx
"use client";
import Image from "next/image";

const TechIcons = () => {
  const skillCategories = [
    {
      title: "skills",
      skills: [
            { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg", url: "https://kubernetes.io/" },
            {name: "OpenShift", icon: "https://www.vectorlogo.zone/logos/openshift/openshift-icon.svg", url: "https://www.redhat.com/en/technologies/cloud-computing/openshift",},
            { name: "RKE2 (Rancher)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rancher/rancher-original.svg", url: "https://docs.rke2.io/" },
            { name: "Helm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg", url: "https://helm.sh/" },
            { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", url: "https://www.jenkins.io/" },
            { name: "Harbor", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/harbor.svg", url: "https://goharbor.io/" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://www.docker.com/" },
            { name: "GitLab CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", url: "https://about.gitlab.com/" },
            { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", url: "https://grafana.com/" },
            { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", url: "https://prometheus.io/" },
            { name: "Fluent Bit", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fluentbit.svg", url: "https://fluentbit.io/" },
            { name: "Graylog", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/graylog.svg", url: "https://www.graylog.org/" },
            { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg", url: "https://www.elastic.co/elasticsearch" },
            { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", url: "https://go.dev/" },
            { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", url: "https://www.gnu.org/software/bash/" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://www.typescriptlang.org/" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com/" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full py-8">
      {skillCategories.map((category) => (
        <div key={category.title} className="mb-8 text-center w-full">
          <h3 className="text-2xl mb-4 text-gray-800 dark:text-gray-200">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {category.skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-110"
              >
                <Image
                  src={skill.icon}
                  width={40}
                  height={40}
                  alt={skill.name}
                  title={skill.name}
                />
                <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {skill.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;