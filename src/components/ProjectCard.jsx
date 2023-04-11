import React from 'react';
import {Badge, Button, Card, Group, Image, Text} from "@mantine/core";


const ProjectCard=({projectData})=> {
    return (

        <Card shadow="sm" padding="lg" radius="md" withBorder sx={{
            // width: "700px"

        }}>
            <Card.Section>
                <Image
                    src={projectData.projectPic}
                    height={350}
                    alt={projectData.projectTitle}
                    fit="cover"
                />
            </Card.Section>

            <Group position="center" mt="md" mb="xs">
                <Text weight={500} size="xl">{projectData.projectTitle}</Text>
            </Group>

            <Text size="sm" color="dimmed">
                {projectData.projectDescription}
            </Text>

            <Group mt="md">
                {projectData.technologies.map(item=>(<Badge color="pink" variant="light" classNames={{root: "badge"}}>{item}</Badge>))}
            </Group>
            <Button variant="light" color="blue" fullWidth mt="lg" radius="md" onClick={() =>
                window.open(projectData.projectLink, '_blank')
            }>
               Check it out
            </Button>
        </Card>
    );
}

export default ProjectCard;