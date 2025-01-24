"use client";

import React, { useState } from "react";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/utils/dummy";
// import ProjectCard from "../items/project_card";
import { COLORS } from "@/styles/colors";
import ProjectModal from "../modal/project_modal";
import SectionTitle from "../elements/section_title";
import ProjectCard2 from "../items/project_card2";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioData)[0] | null
  >(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const filteredProjects = portfolioData.filter(
    (project) => activeTab === "all" || project.category === activeTab
  );

  const handleOpenModalProject = (project: (typeof portfolioData)[0]) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col justify-center mb-20 mx-10 lg:mx-auto mt-5 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      {/* <div className="flex flex-col justify-start mx-10 lg:mx-auto mt-5 max-w-screen-lg"> */}
      <SectionTitle title="Portfolio" />

      <Box sx={{ maxWidth: "lg", mx: "auto" }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            mb: 4,
            ".MuiTabs-indicator": {
              // backgroundColor: COLORS.orange_jreng,
              display: "none",
            },
            ".MuiTab-root": {
              fontFamily: "IBM Plex Mono",
              color: COLORS.lightGray,
              "&.Mui-selected": {
                color: COLORS.primary, // Text color when selected
              },
            },
          }}
        >
          <Tab label="All" value="all" disableRipple />
          <Tab label="Web" value="web" disableRipple />
          <Tab label="Mobile App" value="mobile" disableRipple />
        </Tabs>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={3} className="w-full">
              {filteredProjects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard2
                      {...project}
                      onClick={() => handleOpenModalProject(project)}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
            {filteredProjects.length === 0 && (
              <div className="w-full text-center mt-10">
                <p className="text-gray-500">No projects to show</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Box>

      {selectedProject && (
        <ProjectModal
          open={!!selectedProject}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default Portfolio;
