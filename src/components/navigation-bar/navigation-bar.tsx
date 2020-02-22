import React, { useContext } from 'react';
import { Navbar, NavbarBorder } from 'housex-ui/components/navigation/navbar/navbar';
import { NavLeftContent } from 'housex-ui/components/navigation/navbar/parts/left-content/left-content';
import { NavCenterContent } from 'housex-ui/components/navigation/navbar/parts/center-content/center-content';
import { NavRightContent } from 'housex-ui/components/navigation/navbar/parts/right-content/right-content';
import { Button } from 'housex-ui/components/input/button/button';
import { ButtonNormal } from 'housex-ui/components/input/button/variant/normal';
import { ButtonSize } from 'housex-ui/components/input/button/button.types';
import { Icon24 } from 'housex-ui/components/icons/sizes/icon-24';
import { IconCross } from 'housex-ui/components/icons/icon/cross';
import { Icon3d } from 'housex-ui/components/icons/icon/3d';
import { Icon2d } from 'housex-ui/components/icons/icon/2d';
import { IconNavArrow } from 'housex-ui/components/icons/icon/nav-arrow'
import { IconCheckbox } from 'housex-ui/components/input/icon-checkbox/icon-checkbox';
import { NavigationSpacer } from 'housex-ui/components/navigation/navbar/parts/spacer/spacer'
import { RadioGroup } from 'housex-ui/components/input/icon-checkbox/radio-group';
import { PercentageSelector } from 'housex-ui/components/input/percentage-selector/percentage-selector';
import {ThemeContext} from "styled-components";
import { UITheme } from "housex-ui/components/types/styled";

export const NavigationBar = () => {
  const theme = useContext<UITheme>(ThemeContext);
  return (
    <NavbarBorder>
      <NavLeftContent>
        <Button buttonSize={ButtonSize.UNPADDED} aria={{ label: 'Close' }}>
          <Icon24>
            <IconCross hexColor={theme.colors.Primary} />
          </Icon24>
        </Button>
      </NavLeftContent>
      <NavCenterContent>
        <IconCheckbox
          type="checkbox"
          name="nav"
          onChange={() => {}}
          checked={false}
          label="navigation"
          id="nav"
        >
          <IconNavArrow />
        </IconCheckbox>
        <IconCheckbox
          type="checkbox"
          name="nav"
          onChange={() => {}}
          checked={false}
          label="navigation"
          id="nav"
        >
          <IconNavArrow />
        </IconCheckbox>
        <NavigationSpacer/>
        <RadioGroup groupName='view-toggle' onChange={() => {}} currentSelectionId='2d' items={[
          {
            id: '3d',
            children: <Icon3d />,
            label: 'view in 3d',
          },
          {
            id: '2d',
            children: <Icon2d />,
            label: 'view in 2d',
          },
        ]}/>
        <PercentageSelector
          zoomInAriaLabel="Zoom In"
          zoomOutAriaLabel="Zoom Out"
          currentPercentage={50}
          onChange={() => {}}
          step={25}
        />
      </NavCenterContent>
      <NavRightContent>
        <ButtonNormal buttonSize={ButtonSize.MEDIUM} aria={{ label: 'Save' }} >
          SAVE
        </ButtonNormal>
      </NavRightContent>
    </NavbarBorder>
  )
}
