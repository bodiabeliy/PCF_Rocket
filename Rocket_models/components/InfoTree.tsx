import * as React from 'react'
import { ForkOutlined, NodeCollapseOutlined, NodeExpandOutlined } from '@ant-design/icons';
import { Card, List, Popover } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Tree, TreeNode } from 'react-organizational-chart';

import InfoTreePreviewInfo from './InfoTreePreviewInfo'
import L3Modules from './L3Modules'

import './index.css'
const InfoTree = (infoTreeData: any) => {

  let [parentNode, setParentNode] = React.useState<any>([])

  const [L2ParentNode, setL2ParentNode] = React.useState<any>([])
  const [isL3ItemsOpen, setIsL3ItemsOpen] = React.useState(false)
  const [parentTrees, setParentTrees] = React.useState<boolean>(false)


  const [parentFirstStage, setParentFirstStage] = React.useState(false)
  const [parentInterStage, setParentIntertStage] = React.useState(false)





  React.useEffect(() => {
    setParentNode(infoTreeData.props.raw.L2Items);
    groupedCtegories(parentNode)
  }, [infoTreeData.props.raw.L2Items, parentNode])



  const groupedCtegories = (groupedElements: any) => {
    groupedElements.map((element: any) => {

      const groupedSubCategories = groupBy(element.L3Items, "Category")
      groupedElements  =[groupedSubCategories]
      setL2ParentNode(groupedElements);
      return groupedSubCategories;
    })
  }

  const openParentTrees = (L2Item: any, L2Index: any) => {
    console.log("L2Item", L2Item);

    if (L2Index == 0) {

      switch (L2Item.Name) {
        case "First stage":
          console.log("work!");
          console.log("L2ParentNode", L2ParentNode);
          
          setParentFirstStage(!parentFirstStage)
      }
    }

    if (L2Index == 1) {

      switch (L2Item.Name) {
        case "Inter stage":
          console.log("work-2!");
          setParentIntertStage(!parentInterStage)
      }
    }
  }





  const groupBy = (array: any, key: any) => {
    return array.reduce((result: any, currentValue: any) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {})
  };


  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'green'}
      lineBorderRadius={'10px'}
      label={
        <Card
          className='infoTreeCard'

        >
          <Meta title={infoTreeData.props.raw.Name} description={infoTreeData.props.raw.Description} />
        </Card>
      }
    >

      {

        parentNode?.map((L2Item: any, L2Index: any) => {

          return (
            <TreeNode label={
              <Card
                className='infoTreeCard'

              >
                <Meta
                  avatar={
                    <NodeExpandOutlined onClick={() => openParentTrees(L2Item, L2Index)} />}
                  title={L2Item.Name}
                  description={L2Item.Description}
                />
                {L2Item.Name == "First stage" && parentFirstStage ?
                  <>
                    <TreeNode className='infoTreeCardSubChildren' label={Object.entries(L2ParentNode[0]).map((Categories: any, indx: any) => {

                      return (
                        <L3Modules categoryModules={Categories} categoryIndex={indx} categoriesList={L2ParentNode[0]} />
                      )
                    })}>
                    </TreeNode>
                  </> : L2Item.Name == "Inter stage" && parentInterStage ?
                    <>test</>
                    : null
                }
              </Card>
            } />
          )
        }
        )}

    </Tree>
  );
}

export default InfoTree;