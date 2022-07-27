import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Segment, SegmentGroup } from 'semantic-ui-react';

export default function NotFound(){
    return(
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Oopsie, we couldn't find what you are looking for.
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities' primary>
                    Return to Events page
                </Button>
            </Segment.Inline>
        </Segment>
    )
}
