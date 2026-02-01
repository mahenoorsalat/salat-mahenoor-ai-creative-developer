import { getPosts } from "@/utils/utils";
import { VideoSliderClient } from "./VideoSliderClient";

export const VideoSlider = () => {
    const allProjects = getPosts(["src", "app", "work", "projects"]);
    const videoProjects = allProjects
        .filter((project) => project.metadata.video)
        .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime());

    if (videoProjects.length === 0) return null;

    return <VideoSliderClient videoProjects={videoProjects} />;
};
