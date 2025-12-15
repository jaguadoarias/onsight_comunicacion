import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaArrowUpRightFromSquare, FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";

const ProjectsContainer = styled.div`
  min-height: 100vh;
  background: var(--color-bg-dark);
  padding-top: var(--header-height);
`;

const ProjectsSection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const Container = styled.div`
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: var(--spacing-xl);
  font-size: calc(var(--font-size-xlarge) + 4px);
`;

const Description = styled.p`
  color: #fff;
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  font-size: var(--font-size-medium);
  opacity: 0.9;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
`;

// Then update the ProjectCard and related styles
const ProjectCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectThumbnail = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
  }
`;

const ViewProjectButton = styled.a`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: var(--color-primary);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.3s ease;
  z-index: 2;
  
  &:hover {
    background: var(--color-primary-hover);
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: var(--spacing-md);
`;

const ProjectTitle = styled.h3`
  color: #fff;
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-regular);
  display: flex;
  align-items: baseline;
  gap: 8px;
  
  svg {
    color: var(--color-primary);
    font-size: 0.9em;
  }
`;

const ProjectDescription = styled.p`
  color: #fff;
  opacity: 0.8;
  font-size: var(--font-size-small);
  margin-bottom: var(--spacing-md);
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Channel ID for your YouTube channel
  const channelId = useMemo(() => "UC60mDOEFsULNbKPtifA3H6Q", []);

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
        
        if (!API_KEY) {
          console.error("YouTube API key is missing");
          setLoading(false);
          return;
        }

        // Get the uploads playlist ID from the channel
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${API_KEY}`
        );
        
        const channelData = await channelResponse.json();
        
        if (!channelData.items || channelData.items.length === 0) {
          console.error("Channel not found");
          setLoading(false);
          return;
        }
        
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
        
        // Get all videos from the uploads playlist (up to 50)
        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${uploadsPlaylistId}&key=${API_KEY}`
        );
        
        const playlistData = await playlistResponse.json();
        
        if (!playlistData.items) {
          console.error("No videos found");
          setLoading(false);
          return;
        }
        
        // Format the project data
        const projectsData = playlistData.items.map(item => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
          publishedAt: new Date(item.snippet.publishedAt)
        }));
        
        setProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchAllProjects();
  }, [channelId]);

  return (
    <>
      <Navbar isLogoAlwaysVisible={true} />
      <ProjectsContainer>
        <ProjectsSection>
          <Container>
            <Title>Todos nuestros proyectos</Title>
            <Description>
              Explora nuestra colección completa de trabajos audiovisuales. Cada proyecto refleja nuestra pasión por contar historias visuales impactantes.
            </Description>
            
            {loading ? (
              <div style={{ textAlign: 'center', color: '#fff', padding: '50px 0' }}>
                Cargando proyectos...
              </div>
            ) : (
              <ProjectsGrid>
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectThumbnail image={project.thumbnail}>
                      <ViewProjectButton 
                        href={`https://www.youtube.com/watch?v=${project.id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Ver proyecto"
                      >
                        <FaArrowUpRightFromSquare />
                      </ViewProjectButton>
                    </ProjectThumbnail>
                    <ProjectContent>
                      <ProjectTitle>
                        <FaPlay />
                        {project.title}
                      </ProjectTitle>
                      <ProjectDescription>
                        {project.description.substring(0, 100)}
                        {project.description.length > 100 ? '...' : ''}
                      </ProjectDescription>
                    </ProjectContent>
                  </ProjectCard>
                ))}
              </ProjectsGrid>
            )}
          </Container>
        </ProjectsSection>
      </ProjectsContainer>
      <Footer />
    </>
  );
};

export default Projects;
