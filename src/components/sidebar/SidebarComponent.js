import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
    IconTickets
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';
import CreateMainCategory from '../../Pages/maincategory/CreateMainCategory';
import slugs from 'resources/slugs';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.dashboard}
                title='Dashboard'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.dashboard)}
            />
            <MenuItem
                id={SLUGS.mainCategory}
                items={[SLUGS.viewMainCategory]}
                title='Main Category'
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.mainCategory}
                    title='Create Main Category'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.mainCategory)}
                />
                <MenuItem
                    id={SLUGS.CreateSubMainCategory}
                    title='Create Sub Category'
                    level={2}
                    // icon={IconContacts}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.CreateSubMainCategory)}
                />
                <MenuItem
                    id={SLUGS.CreateSubSubMainCategory}
                    title='Create Sub Sub Category'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.CreateSubSubMainCategory)}
                />
                <MenuItem
                    id={SLUGS.ProductComponents}
                    title='Products'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.ProductComponents)}
                />
                <MenuItem
                    id={SLUGS.ProductComponents}
                    title='Colors'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.CreateColors)}
                />
                <MenuItem
                    id={SLUGS.productColor}
                    title='Product Colors'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.productColor)}
                />
                {/* </MenuItem> */}
            </MenuItem>

            <MenuItem
                id={SLUGS.tickets}
                title='Tickets'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.tickets)}
            />
            <MenuItem
                id={SLUGS.ideas}
                items={[SLUGS.ideasTwo, SLUGS.ideasThree]}
                title='Ideas'
                icon={IconIdeas}
            >
                <MenuItem
                    id={SLUGS.ideas}
                    title='Sub Item 1'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.ideas)}
                />
                <MenuItem
                    id={SLUGS.ideasTwo}
                    title='Sub Item 2'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.ideasTwo)}
                />
                <MenuItem
                    id={SLUGS.ideasThree}
                    title='Sub Item 3'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.ideasThree)}
                />
            </MenuItem>
            <MenuItem
                id={SLUGS.contacts}
                title='Contacts'
                icon={IconContacts}
                onClick={() => onClick(SLUGS.contacts)}
            />
            <MenuItem
                id={SLUGS.agents}
                title='Agents'
                icon={IconAgents}
                onClick={() => onClick(SLUGS.agents)}
            />
            <MenuItem
                id={SLUGS.articles}
                title='Articles'
                icon={IconArticles}
                onClick={() => onClick(SLUGS.articles)}
            />
            <MenuItem
                id={SLUGS.subscription}
                title='Subscription'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.subscription)}
            />
            <div className={classes.separator}></div>
            <MenuItem
                id={SLUGS.settings}
                title='Settings'
                icon={IconSettings}
                onClick={() => onClick(SLUGS.settings)}
            />

            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} />
        </Menu>
    );
}

export default SidebarComponent;
